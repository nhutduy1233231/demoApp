import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

const HeaderFC: React.FC<any> = () => {
    const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));

    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
    );
};

export default HeaderFC;
