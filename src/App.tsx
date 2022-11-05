import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './Routes';

const App: React.FC<any> = () => {
    return (
        <Router>
            <Routes>
                {publicRoute?.map((route: any, index: number) => {
                    return <Route key={index} path={route.path} element={<route.component />} />;
                })}
            </Routes>
        </Router>
    );
};

export default App;
