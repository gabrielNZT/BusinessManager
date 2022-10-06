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
        "/api/registerCompany"(controller: 'user', action: 'registerCompany')
        "/api/configPassword"(controller: 'user', action: 'configPassword')
        "/api/userProperties"(controller: 'user', action: 'userProperties')

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
