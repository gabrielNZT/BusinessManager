import api from "./api";

export function PasswordRecover(email) {
    return api
        .post("/recoverPassword", {
            email: email
        }).then();
}

export function RegisterCompany(company, user) {
    const userCompany = {
        company: company,
        user: user
    }
    return api
        .post("/registerCompany", userCompany).then()
}

export function ChangePassword(name, newPassword) {
    const user = {
        name: name,
        password: newPassword
    }
    return api
        .post("/configPassword", user).then()
}

export const SignIn = (user) => {
    return api
        .post("/login", {
            username: user.name,
            password: user.password
        }, {
            headers: {
                authorization: ''
            }
        })
}

export const GetUserProperties = (username) => {
    return api
        .get(`/userProperties?username=${username}`).then()
}

export const GetCurrentUser = () => {
    return api
        .get('/currentUser').then()
}

export const RegisterUser = (user) => {
    return api
        .post('/registerUser', user)
        .then()
}

export const SaveProduct = (product) => {
    return api
        .post("/saveProduct", product)
        .then()
}

export const showProduct = (product_id) => {
    return api
        .get("/product/" + product_id)
        .then()
}

export const GetListUser = (pagination, sorter, filters) => {
    const { current, pageSize } = pagination
    const { order: sort } = sorter ? sorter : { order: 'asc' }
    return api
        .get(`/getUserList`, {
            params: {
                current: current,
                pageSize: pageSize,
                sort: sort === 'ascend' ? 'asc' : sort === 'descend' ? 'desc' : 'asc',
                filters: JSON.stringify(filters)
            }
        })
        .then()
}

export const GetListProduct = (pagination, sorter, filters) => {
    const { current, pageSize } = pagination
    const { order: sort } = sorter ? sorter : { order: 'asc' }
    return api
        .get(`/getProductList`, {
            params: {
                current: current,
                pageSize: pageSize,
                sort: sort === 'ascend' ? 'asc' : sort === 'descend' ? 'desc' : 'asc',
                filters: JSON.stringify(filters)
            }
        })
        .then()
}

export const GetImageUser = (user_id) => {
    return api
        .get("/getUserImage/" + user_id)
        .then()
}

export const GetProductImage = (image_id) => {
    return api
        .get("/getProductImage/" + image_id)
        .then()
}

export const UpdateProduct = (product) => {
    return api
        .put("/updateProduct", product)
        .then()
}

export const UpdateUser = (data) => {
    const { permission, passwordLocked, ...user } = data
    const user_role = permission ? {
        user: {
            ...user
        },
        role: {
            authority: permission
        }
    } : { user: user }
    return api
        .put("/updateUser", user_role)
        .then()
}

export const DeleteUser = (user_id) => {
    console.log(user_id)
    return api
        .delete("/deleteUser/" + user_id)
        .then()
}

export const DeleteProduct = (product_id) => {
    return api
        .delete("/deleteProduct/" + product_id)
        .then()
}

export const GetProductCode = (company_id) => {
    return api
        .get("/getProductCode/" + company_id)
        .then()
}