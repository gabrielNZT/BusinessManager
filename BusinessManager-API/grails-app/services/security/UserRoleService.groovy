package security

import exceptions.UpdateUserException
import grails.converters.JSON
import grails.gorm.transactions.Transactional
import java.text.SimpleDateFormat

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
        def pattern = "dd/MM/yyyy" as String
        def listFilters = JSON.parse(filters)
        def c = UserRole.createCriteria()
        def max = (pageSize * current)
        Integer offset = (pageSize * (current - 1))
        def results = c.list (max: max, offset: offset){
            createAlias("role","_role")
            createAlias("user","_user")
            if(listFilters != null)  {
                listFilters.name?.value ? like("_user.name", "%${listFilters.name.value}%") : null
                listFilters.username?.value ? like("_user.username", "%${listFilters.username.value}%") : null
                listFilters.email?.value ? like("_user.email", "${listFilters.email.value}%") : null
                listFilters.phone?.value ? like("_user.phone", "${listFilters.phone.value}%") : null
                listFilters.enabled?.value ? (listFilters.enabled.value != "Todos"? eq("_user.enabled", listFilters.enabled.value != "Desativado") : null) : null
                listFilters.permission?.value ? eq("_role.authority", "${listFilters.permission.value}") : null
                listFilters.contractDate?.value ? eq("_user.contractDate", new SimpleDateFormat(pattern).parse(listFilters.contractDate.value as String)) : null
                listFilters.birthDate?.value ? eq("_user.birthDate", new SimpleDateFormat(pattern).parse(listFilters.birthDate.value as String)) : null
            }
            order("_user.name", sort)
        }

        return results
    }

    @Transactional
    void updateUser(Object request) throws UpdateUserException{
        def map = request as Map
        Role role = Role.findByAuthority(map.role.authority)
        User user = User.findById(map.user.id?: map.user.key)
        UserRole userRole = UserRole.findByUser(user)
        String pattern = 'dd/MM/yyyy'

        map.user.each { key, value -> {
            def valor = user.getProperty(key)
            if(value != valor) {
                if (key == 'contractDate' || key == 'birthDate') {
                    user."$key" = new SimpleDateFormat(pattern).parse(value as String)
                } else user."$key" = valor
            }
          }
        }

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
