import security.UserDetailsService
import security.UserPasswordEncoderListener
// Place your Spring DSL code here
beans = {
    userPasswordEncoderListener(UserPasswordEncoderListener)
    userDetailsService(UserDetailsService){
        grailsApplication = ref('grailsApplication')
    }
}
