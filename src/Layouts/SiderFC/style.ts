import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    'main_sibar:first-child': {
        '&.ant-menu-item .ant-menu-item-selected': {
            marginTop: 0,
        },
    },
});
export default useStyles;
