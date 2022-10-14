import { Breadcrumb } from 'antd';
import React from 'react';

function BreadcrumbNavigation(props) {

    const handleItems = (breadCrumb) => breadCrumb.map((item, index) =>
        <Breadcrumb.Item key={index} href={item.link}>{item.name}</Breadcrumb.Item>);

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href='/home' style={{ color: 'gray' }} >Início</Breadcrumb.Item>
                {props.breadCrumb ? handleItems(props.breadCrumb) : null}
            </Breadcrumb>
        </div>
    )
};
export default BreadcrumbNavigation;