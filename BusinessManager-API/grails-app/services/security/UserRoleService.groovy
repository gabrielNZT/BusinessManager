package security

import exceptions.UpdateUserException

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

    void updateUser(Object request) throws UpdateUserException{
        def map = request as Map
        UserRole userRole = UserRole.findByUser(User.findById(request.user?.id))
        userRole.properties = map
        if(userRole.hasErrors()){
            throw new UpdateUserException(userRole.errors)
        }
    }
}
