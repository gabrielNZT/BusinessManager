import api from "./api";

export function PasswordRecover(email){
    return api
    .post("/api/recoverPassword", {
        email: email
    }).then();
}