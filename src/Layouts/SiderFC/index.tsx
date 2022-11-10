import './style.scss';
import React, { useContext, useState } from 'react';
import { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { LayOutsContext } from '~/Layouts';
import { memo } from 'react';
import { typeContext } from '~/enums/types';

const { Sider } = Layout;
const SiderFC: React.FC<any> = () => {
    const valueContext: typeContext = useContext(LayOutsContext);
    const { collapsed } = valueContext;
    const [activeKey, setActiveKey] = useState([]);
    const [openKeys, setOpenKeys] = useState(['6', '8']);

    const getItem = (label: String, key: any, icon: any, children?: Array<any>) => {
        return {
            label,
            key,
            icon,
            children,
        };
    };

    const getDiveder = (type: any = 'divider') => {
        return {
            type,
        };
    };

    const items: MenuProps['items'] = [
        getItem('case 1', 1, <DesktopOutlined />),
        getItem('case 2', 2, <AppstoreOutlined />),
        getDiveder(),
        getItem('case 3', 3, <ContainerOutlined />),
        getItem('case 4', 4, <MailOutlined />, [getItem('case 5', '5', '')]),
        getItem('case 6', 6, <SettingOutlined />, [
            getItem('case 7', 7, ''),
            getItem('case 8', 8, '', [getItem('case 9', 9, '')]),
        ]),
    ];
    const rootSubmenuKeys = ['4', '6'];
    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const handleActive = ({ key }: any) => {
        setActiveKey(key);
    };

    return (
        <Sider collapsed={collapsed} width={200} className="site-layout-background">
            <Menu
                onClick={({ key, keyPath }) => handleActive({ key, keyPath })}
                defaultSelectedKeys={activeKey?.length > 0 ? activeKey : [`${items[0]?.key}`]}
                mode="inline"
                items={items}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            />
        </Sider>
    );
};

export default memo(SiderFC);
