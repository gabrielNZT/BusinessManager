import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function ButtonsVertical(props) {
    let navigate = useNavigate()
    const handleNavigate = () => navigate("../", {replace: true})

    return (
        <div className='div-buttons' style={props.style}>
            <Button className='button-submit-form' variant="primary" type="submit">{props.primaryButton}</Button>
            <i>ou</i>
            <Button onClick={handleNavigate} className='button-register' variant="primary" type="submit">VOLTAR PARA O LOGIN</Button>
        </div>
    )
}
export default ButtonsVertical