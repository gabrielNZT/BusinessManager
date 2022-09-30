import api from "./api";

export function PasswordRecover(email) {
    return api
        .post("/api/recoverPassword", {
            email: email
        }).then();
}

export function RegisterCompany(company, user) {
    const userCompany = {
        ...company,
        ...user
    }
    return api
        .post("/api/userCompany", userCompany).then()
}