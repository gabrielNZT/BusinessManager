package security

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

    def save(User user){
        user.save()
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
        email?: mailService.sendMail {
            to email
            subject "NOVA SENHA"
            text "Sua senha de acesso temporária é: $password"
        }
    }

    User findUser(name) {
        if(User.findByUsername(name) != null) return User.findByUsername(name)
        else return User.findByEmail(name)
    }
}
