package security

import exceptions.UpdateUserException
import grails.gorm.transactions.Transactional

class UserRoleService {

    UserRole get(Long id) {
        return UserRole.findById(id)
    }

    List<UserRole> list() {
        return UserRole.list()
    }

    Long count() {
        return UserRole.count()
    }

    UserRole delete(Long id) {
        return UserRole.findById(id).delete()
    }

    UserRole save(UserRole userRole) {
        return userRole.save()
    }

    @Transactional
    void updateUser(Object request) throws UpdateUserException{
        def map = request as Map
        Role role = Role.findByAuthority(map.role.authority)
        User user = User.findById(map.user.id)
        UserRole userRole = UserRole.findByUser(user)

        user.properties = map.user
        user.contentType = map.user.userPhoto.contentType
        user.imageBytes = map.user.userPhoto.base64?.decodeBase64()

        if(user.hasErrors()) throw new UpdateUserException(user.errors)
        else user.save()

        userRole.setUser(user)
        userRole.setRole(role)

        if (userRole.hasErrors()) throw new UpdateUserException(userRole.errors)
        else userRole.save()

    }
}
