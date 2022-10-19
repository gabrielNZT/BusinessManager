import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeFilled,
    SettingFilled
} from '@ant-design/icons';
import './style/style.css'
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { FaUsers, FaBoxes } from 'react-icons/fa'
import LogoutFooter from './components/menuFooter/index.js';
import MenuHeader from '../layout/components/menuHeader';
import BreadcrumbNavigation from '../breadcrumb';
import DefaultAvatar from '../defaultAvatar';
import { useNavigate } from 'react-router-dom';
import { handleNavigate } from './utils';
const { Header, Sider, Content } = Layout;

function LayoutHome (props) {
    const [collapsed, setCollapsed] = useState(false);
    let navigate = useNavigate()

    return (
        <Layout className='layout-home'>
            <Sider className={collapsed? 'collapsed' : 'not-collapsed'} trigger={null} collapsible collapsed={collapsed}>
                { !collapsed && <MenuHeader/>}
                <Menu
                    onSelect={(item) => navigate(handleNavigate(item.key))}
                    mode="inline"
                    defaultSelectedKeys={props.currentPage? props.currentPage : ['1']}
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
                <LogoutFooter collapsed={collapsed}/>
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
                        onClick: () => setCollapsed(!collapsed),
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
                    <BreadcrumbNavigation breadCrumb={props.breadCrumb}/>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
}
export default LayoutHome