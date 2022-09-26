import Background from "../../assets";
import LoginForm from "./component/form";
import './style/style.css'

function Login() {
    return (
        <>
            <Background />
            <div className="div-login-form">
                <div className="div-login-form-header">
                    <h1 className="h1-login-header">Login</h1>
                    <p className="p-login-header">Bem vindo ao <span className="span-company-name">SGL</span></p>
                </div>
                <LoginForm />
            </div>
        </>
    )
}
export default Login;