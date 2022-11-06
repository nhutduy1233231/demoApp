import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '~/components/GlobalStyles';
import Layouts from './Layouts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Layouts />
        </GlobalStyles>
    </React.StrictMode>,
);
