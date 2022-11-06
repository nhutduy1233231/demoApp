import { Breadcrumb, Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/Routes';

const { Content } = Layout;
const ContentFC: React.FC<any> = () => {
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    height: '100%',
                }}
            >
                <Router>
                    <Routes>
                        {publicRoute?.map((route: any, index: number) => {
                            return <Route key={index} path={route.path} element={<route.component />} />;
                        })}
                    </Routes>
                </Router>
            </Content>
        </Layout>
    );
};

export default ContentFC;
