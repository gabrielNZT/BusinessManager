import api from "../api"

export const SignIn = (user) => {
    api
    .post("/api/login", {
        username: user.name,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('auth', JSON.stringify({access_token: response.data.access_token}))
    })
    .catch(function(error) {
        console.log(error)
    })
}