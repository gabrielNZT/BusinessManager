package security

import businessmanager.api.Company
import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic

@GrailsCompileStatic
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

    transient springSecurityService

    private static final long serialVersionUID = 1

    String username
    String password
    String email
    String phone
    boolean hasTemporaryPassword = false
    boolean enabled = true
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired

    static belongsTo = [company: Company]

    static transients = ['springSecurityService']

    Set<Role> getAuthorities() {
        (UserRole.findAllByUser(this) as List<UserRole>)*.role as Set<Role>
    }

    static constraints = {
        password nullable: false, blank: false, password: true
        username nullable: false, blank: false, unique: true
        email unique: true, nullable: false, blank: false, email: true
    }

    static mapping = {
	    password column: '`password`'
    }
}
