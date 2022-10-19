package security

import exceptions.RegisterCompanyException
import grails.gorm.transactions.Transactional
import grails.plugins.mail.MailService

@Transactional
class UserService{

    MailService mailService

    Long count(){
        return User.count
    }

    User get(Long id){
        return User.get(id)
    }

    def delete(Long id){
        User.findById(id).delete()
    }

    List<User> list(){
        return User.list()
    }

    def save(User user) throws RegisterCompanyException{
        user.save()
        if(user.hasErrors()){
            transactionStatus.setRollbackOnly()
            throw new RegisterCompanyException(user.errors)
        }
    }

    User handleRequestUserRegister (Object request){
        def requestUser = request.user
        return new User(email: requestUser.email, username: requestUser.email, phone: requestUser.phone,
        password: generatePassword())
    }

    String generatePassword(){
        ArrayList<String> validCharacters = new ArrayList<>(Arrays.asList("A", "a", "B", "b", "1", "3", "V", "#",
        "v", "G", "g", "&", "@", "T", "h", "H", "J", "j", "L", "l", "x", "X"))

        Integer passwordSize = 6
        StringBuilder password = new StringBuilder()

        for(int i in 1..passwordSize) {
            String value = validCharacters.get(Math.floor(Math.random() * validCharacters.size()) as int)
            password.append(value)
        }

        return password.toString()
    }

    def sendEmailPassword(String email, String password){
        String passwordToSend
        if(email != null){
        passwordToSend = (password == null? generatePassword() : password )

            mailService.sendMail {
                to email
                subject "NOVA SENHA"
                text "Sua senha de acesso temporária é: $passwordToSend"
            }
        }
    }

    User recoverUserPassword (Object request) {
        User user = User.findByEmail(request.email)
        if(user == null) return null

        String newPassowrd = generatePassword()
        user.setPassword(newPassowrd)
        user.setHasTemporaryPassword(true)
        user.setVersion(user.version + 1)

        sendEmailPassword(user.email, newPassowrd)

        return user
    }

    User configPassword (Object request) {
        User user = findUser(request.name)

        if(user == null) return null

        String newPassword = generatePassword()
        user.setHasTemporaryPassword(false)
        user.setPassword(newPassword)

        return user
    }

    User findUser(name) {
        if(User.findByUsername(name) != null) return User.findByUsername(name)
        else return User.findByEmail(name)
    }
}
