package security

import exceptions.UpdateUserException
import grails.converters.JSON
import grails.gorm.transactions.Transactional
import org.hibernate.criterion.Projections

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

    Object getList (Integer pageSize, Integer current, String sort  , String filters) {
        def listFilters = JSON.parse(filters)
        def c = UserRole.createCriteria()
        def max = (pageSize * current)
        Integer offset = (pageSize * (current - 1))
        def results = c.list (max: max, offset: offset){
            createAlias("role","_role")
            createAlias("user","_user")
            if(listFilters != null)  {
                listFilters.name? like("_user.name", "%${listFilters.name.value}%") : null
                listFilters.username? like("_user.username", "%${listFilters.username.value}%") : null
                listFilters.email? like("_user.email", "${listFilters.email.value}%") : null
                listFilters.phone? like("_user.phone", "${listFilters.phone.value}%") : null
                listFilters.enabled? eq("_user.enabled", listFilters.enabled.value != "Desativado") : null
                listFilters.permission? eq("_role.authority", "${listFilters.permission.value}") : null
            }
            order("_user.name", sort)
        }

        return results
    }

    @Transactional
    void updateUser(Object request) throws UpdateUserException{
        def map = request as Map
        Role role = Role.findByAuthority(map.role.authority)
        User user = User.findById(map.user.id)
        UserRole userRole = UserRole.findByUser(user)

        user.properties = map.user
        if(map.user.userPhoto != null){
            user.contentType = map.user.userPhoto.contentType
            user.imageBytes = map.user.userPhoto.base64?.decodeBase64()
        }

        if(user.hasErrors()) throw new UpdateUserException(user.errors)
        else user.save(flush: true)

        userRole.setUser(user)
        userRole.setRole(role)

        if (userRole.hasErrors()) throw new UpdateUserException(userRole.errors)
        else userRole.save(flush: true)

    }
}
