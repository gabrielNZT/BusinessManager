import api from "./api";

export function PasswordRecover(email) {
    return api
        .post("/api/recoverPassword", {
            email: email
        }).then();
}

export function RegisterCompany(company, user) {
    const userCompany = {
        company: company,
        user: user
    }
    return api
        .post("/api/registerCompany", userCompany).then()
}

export function ChangePassword(name, newPassword){
    const user = {
        name: name,
        password: newPassword
    }
    console.log(user)
    return api
    .post("/api/configPassword", user).then()
}