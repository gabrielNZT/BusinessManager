import { Breadcrumb } from 'antd';
import React from 'react';

function BreadcrumbNavigation(props) {

    function handleItems(tag) {
        switch (tag) {
            case 'PRODUCTS':
                return (<Breadcrumb.Item> Produtos </Breadcrumb.Item>)
            case 'USERS':
                return (<Breadcrumb.Item> Usuários </Breadcrumb.Item>)
            case 'PRODUCT_SELECTED':
                return (
                    <>
                        <Breadcrumb.Item href=''> Produtos </Breadcrumb.Item>
                        <Breadcrumb.Item> {props.productName} </Breadcrumb.Item>
                    </>
                )
            default:
                return
        }
    }

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href='/home' style={{ color: 'gray' }} >Início</Breadcrumb.Item>
                { handleItems }
            </Breadcrumb>
        </div>
    )
};
export default BreadcrumbNavigation;