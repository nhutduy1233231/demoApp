import './style.scss';
import React, { useContext } from 'react';
import { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { LayOutsContext } from '~/Layouts';
import { memo } from 'react';
import { typeContext } from '~/common/types';

const { Sider } = Layout;
const SiderFC: React.FC<any> = () => {
    const valueContext: typeContext = useContext(LayOutsContext);
    const { collapsed } = valueContext;

    const getItem = (label: String, key: any, icon: any, children?: Array<any>) => {
        return {
            label,
            key,
            icon,
            children,
        };
    };

    const getDiveder = (type: any) => {
        return {
            type,
        };
    };

    const items: MenuProps['items'] = [
        getItem('case 1', 1, <DesktopOutlined />),
        getItem('case 2', 2, <AppstoreOutlined />),
        getDiveder('divider'),
        getItem('case 3', 3, <ContainerOutlined />),
        getItem('case 4', 4, '', [getItem('case 5', '5', <MailOutlined />)]),
        getItem('case 6', 6, '', [
            getItem('case 7', 7, <DesktopOutlined />),
            getItem('case 8', 8, '', [getItem('case 9', 9, <SettingOutlined />)]),
        ]),
    ];

    const handleClick = ({ key, keyPath }: any) => {
        console.log(key, keyPath);
    };

    return (
        <Sider collapsed={collapsed} width={200} className="site-layout-background">
            <Menu
                onClick={({ key, keyPath }) => handleClick({ key, keyPath })}
                defaultSelectedKeys={['5']}
                defaultOpenKeys={['4']}
                mode="inline"
                items={items}
            />
        </Sider>
    );
};

export default memo(SiderFC);
