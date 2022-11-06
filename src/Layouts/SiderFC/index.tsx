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

    const items: MenuProps['items'] = [
        {
            label: 'case 1',
            key: '1',
            icon: <DesktopOutlined />,
        },
        {
            label: 'case 2',
            key: '2',
            icon: <AppstoreOutlined />,
        },
        {
            type: 'divider',
        },
        {
            label: 'case 3',
            key: '3',
            icon: <ContainerOutlined />,
        },
        {
            label: 'case 4',
            key: '4',
            children: [
                {
                    label: 'case 5',
                    key: '5',
                    icon: <MailOutlined />,
                },
            ],
        },
        {
            label: 'case 6',
            key: '6',
            children: [
                {
                    label: 'case 7',
                    key: '7',
                    icon: <DesktopOutlined />,
                },
                {
                    label: 'case 8',
                    key: '8',
                    children: [
                        {
                            label: 'case 9',
                            key: '9',
                            icon: <SettingOutlined />,
                        },
                        {
                            label: 'case 10',
                            key: '10',
                            icon: <DesktopOutlined />,
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <Sider collapsed={collapsed} width={200} className="site-layout-background">
            <Menu defaultSelectedKeys={['1']} defaultOpenKeys={[]} mode="inline" items={items} />
        </Sider>
    );
};

export default memo(SiderFC);
