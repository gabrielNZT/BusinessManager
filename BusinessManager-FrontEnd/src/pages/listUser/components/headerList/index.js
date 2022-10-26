import { useNavigate } from "react-router-dom"

function HeaderList(props){
    let navigate = useNavigate()

    const {config} = props
    const handleNavigate = () => navigate(config.path, {replace: true})

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2vh'}}>
            <h1 style={{fontSize: '1.8rem'}}> {config.title} </h1>
            <button onClick={handleNavigate} className="btn-new-user"> <b style={{fontSize: '20px'}}>+</b> {config.buttonTitle}</button>
        </div>
    )
}
export default HeaderList