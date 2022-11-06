import React, { createContext, useState } from 'react';
import { Layout } from 'antd';
import HeaderFC from './HeaderFC';
import SiderFC from './SiderFC';
import ContentFC from './ContentFC';
import { typeContext } from '~/enums/types';

export const LayOutsContext: any = createContext({});

const Layouts: React.FC<any> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const valueContext: typeContext = {
        collapsed,
        setCollapsed,
    };

    return (
        <div className="container">
            <LayOutsContext.Provider value={valueContext}>
                <Layout style={{ height: '100%' }}>
                    <HeaderFC />
                    <Layout>
                        <SiderFC />
                        <ContentFC />
                    </Layout>
                </Layout>
            </LayOutsContext.Provider>
        </div>
    );
};

export default Layouts;
