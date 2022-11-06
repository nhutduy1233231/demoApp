import './style.scss';
import React, { useContext, useState } from 'react';
import { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { LayOutsContext } from '~/Layouts';
import { memo } from 'react';
import { typeContext } from '~/common/types';
import { isNullOrEmpty } from '~/common/common';

const { Sider } = Layout;
const SiderFC: React.FC<any> = () => {
    const valueContext: typeContext = useContext(LayOutsContext);
    const { collapsed } = valueContext;
    const [activeKey, setActiveKey] = useState([]);
    const [activeSubKey, setActiveSubKey] = useState() as any;

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

    const handleActive = ({ key }: any) => {
        setActiveKey(key);
    };

    const handleActiveSubTab = (openKeys: any) => {
        const result = openKeys?.filter((el: any) => {
            if (!isNullOrEmpty(el)) return el;
        });
        setActiveSubKey(result);
    };

    return (
        <Sider collapsed={collapsed} width={200} className="site-layout-background">
            <Menu
                triggerSubMenuAction={'hover'}
                onClick={({ key, keyPath }) => handleActive({ key, keyPath })}
                defaultSelectedKeys={activeKey?.length > 0 ? activeKey : [`${items[0]?.key}`]}
                mode="inline"
                items={items}
                openKeys={activeSubKey}
                onOpenChange={(openKeys) => handleActiveSubTab(openKeys)}
            />
        </Sider>
    );
};

export default memo(SiderFC);
