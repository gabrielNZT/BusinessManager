import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function LogoutFooter(props) {
    const { collapsed } = props
    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('auth')
        navigate("../", {replace: true})
    }
    return (
        <div className={!collapsed ? 'logout-footer' : 'logout-footer-collapsed'}>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8px' }}>
                <li className='ant-menu-item'>
                    <div className='div-logout' onClick={handleLogout}>
                        <BiLogOut style={{ fontSize: '30px' }} />
                        <span className='span-logout' style={{ marginLeft: '10px', fontSize: '18px' }}>{!collapsed ? 'Sair' : ''}</span>
                    </div>
                </li>
                <div className='span-version'>
                    <span>{!collapsed ? 'Versão 1.1.6' : ''}</span>
                </div>
            </div>
        </div>
    )
}
export default LogoutFooter