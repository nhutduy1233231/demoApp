import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    myColorxxx: {
        '& .ant-menu-overflow-item': {
            color: 'red',
        },
    },
});
export default useStyles;
