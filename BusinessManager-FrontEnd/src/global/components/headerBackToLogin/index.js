import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

function HeaderArrow(props) {
    let navigate = useNavigate()
    const handleNavigate = () => navigate(props.path? props.path : "../", { replace: true })

    return (
        <div className={props.customStyle}>
            <div className="prefix-icon">
                <ArrowLeftOutlined onClick={handleNavigate} />
            </div>
            <h1 style={{ marginLeft: props.margin, fontSize: props.size, fontWeight: props.bold}}> {props.title}</h1>
        </div>
    )
}
export default HeaderArrow