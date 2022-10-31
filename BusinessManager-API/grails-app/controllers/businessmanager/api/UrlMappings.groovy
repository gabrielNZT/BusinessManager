package businessmanager.api

class UrlMappings {

    static mappings = {
        delete "/api/$controller/$id(.$format)?"(action:"delete")
        get "/api/$controller(.$format)?"(action:"index")
        get "/api/$controller/$id(.$format)?"(action:"show")
        post "/api/$controller(.$format)?"(action:"save")
        put "/api/$controller/$id(.$format)?"(action:"update")
        patch "/api/$controller/$id(.$format)?"(action:"patch")

        "/api/recoverPassword"(controller: 'user', action: 'recoverPassword')
        "/api/registerCompany"(controller: 'company', action: 'registerCompany')
        "/api/configPassword"(controller: 'user', action: 'configPassword')
        "/api/userProperties"(controller: 'user', action: 'userProperties')
        "/api/currentUser"(controller: 'user', action: 'currentUser')
        "/api/registerUser"(controller: 'user', action: 'registerUser')
        "/api/saveProduct"(controller: 'product', action: 'saveProduct')
        "/api/getUserList"(controller: 'userRole', action: 'getListUser')
        "/api/getUserImage/$id(.$format)?"(controller: 'user', action: 'getUserImage')
        "/api/getProductImage/$id(.$format)?"(controller: 'product', action: 'getImage')
        "/api/updateUser"(controller: 'userRole', action: 'updateUser')
        "/api/updateProduct"(controller: 'product', action: 'updateProduct')
        "/api/deleteUser/$id(.$format)?"(controller: 'userRole', action: 'deleteUser')
        "/api/deleteProduct/$id(.$format)?"(controller: 'product', action: 'deleteProduct')
        "/api/getProductCode/$id(.$format)?"(controller: 'product', action: 'getProductCode')

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
