import {Background} from "../../assets";
import { useEffect } from "react";
import { Logo } from "../../assets";
import LoginForm from "./form";
import './style/style.css'

function Login() {

    useEffect(() => {
        localStorage.clear()
        localStorage.removeItem('auth')
    }, []);
    
    return (
        <> 
            <Background />
            <Logo/>
            <div className="div-login-form">
                <div className="div-login-form-header">
                    <h1 className="h1-login-header">Login</h1>
                    <p className="p-login-header">Bem vindo ao <span className="span-company-name">BM</span></p>
                </div>
                <LoginForm/>
            </div>
        </>
    )
}
export default Login;