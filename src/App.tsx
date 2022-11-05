import React from 'react';
import { Layout } from 'antd';
import HeaderFC from './Layouts/HeaderFC';
import SiderFC from './Layouts/SiderFC';
import ContentFC from './Layouts/ContentFC';

const App: React.FC<any> = () => {
    return (
        <div className="container">
            <Layout style={{ height: '100%' }}>
                <HeaderFC />
                <Layout>
                    <SiderFC />
                    <ContentFC />
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
