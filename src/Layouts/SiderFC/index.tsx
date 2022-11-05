import type { MenuProps } from 'antd';
import { Menu, Layout, Button } from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const SiderFC: React.FC<any> = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const getItem = (
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem => {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    };

    const items: MenuItem[] = [
        getItem(
            '',
            '1',
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>,
        ),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Option 3', '3', <ContainerOutlined />),

        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
        ]),

        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),

            getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
    ];

    return (
        <Sider collapsed={collapsed} width={200} className="site-layout-background">
            <Menu
                className=""
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                style={{ height: '100%', borderRight: 0 }}
            />
        </Sider>
    );
};

export default SiderFC;
