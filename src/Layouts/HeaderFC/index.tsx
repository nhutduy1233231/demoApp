import './header.scss';
import type { MenuProps } from 'antd';
import { Menu, Layout, Button } from 'antd';
import { useContext } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { memo } from 'react';
import { LayOutsContext } from '..';
import { typeContext } from '~/enums/types';

const { Header } = Layout;

const HeaderFC: React.FC<any> = () => {
    const valueContext: typeContext = useContext(LayOutsContext);
    const { collapsed, setCollapsed } = valueContext;

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));

    return (
        <Header className="header">
            <Button onClick={toggleCollapsed}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</Button>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
    );
};

export default memo(HeaderFC);
