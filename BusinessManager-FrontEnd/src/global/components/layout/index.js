import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeFilled,
    SettingFilled
} from '@ant-design/icons';
import './style/style.css'
import { Layout, Menu } from 'antd';
import React from 'react';
import { FaUsers, FaBoxes } from 'react-icons/fa'
import LogoutFooter from './components/menuFooter/index.js';
import MenuHeader from '../layout/components/menuHeader';
import BreadcrumbNavigation from '../breadcrumb';
import DefaultAvatar from '../defaultAvatar';
import { useNavigate } from 'react-router-dom';
import { handleNavigate } from './utils';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCollapsed } from './reducer/actions';
const { Header, Sider, Content } = Layout;

function LayoutHome(props) {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const collapsed = useSelector(state => state.siderCollapsed.collapsed)

    return (
        <Layout className='layout-home'>
            <Sider className={collapsed ? 'collapsed' : 'not-collapsed'} trigger={null} collapsible collapsed={collapsed}>
                {!collapsed && <MenuHeader />}
                <Menu
                    onSelect={(item) => navigate(handleNavigate(item.key), { state: { collapsed: collapsed } })}
                    mode="inline"
                    defaultSelectedKeys={props.currentPage ? props.currentPage : ['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeFilled />,
                            label: 'Dashboard'
                        },
                        {
                            key: '2',
                            icon: <FaBoxes />,
                            label: 'Produtos',
                        },
                        {
                            key: '3',
                            icon: <FaUsers />,
                            label: 'Usuários',
                        },
                        {
                            key: '4',
                            icon: <SettingFilled />,
                            label: 'Configurações',
                        }
                    ]}
                />
                <LogoutFooter collapsed={collapsed} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        fontSize: '30px',
                        padding: 0,
                        marginLeft: '10px'
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => dispatch(ChangeCollapsed()),
                    })}
                    <DefaultAvatar />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <BreadcrumbNavigation breadCrumb={props.breadCrumb} />
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
}
export default LayoutHome