import { BiLogOut } from 'react-icons/bi';

function LogoutFooter(props) {
    const { collapsed } = props
    return (
        <div className={!collapsed ? 'logout-footer' : 'logout-footer-collapsed'}>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8px' }}>
                <li class='ant-menu-item'>
                    <div className='div-logout'>
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