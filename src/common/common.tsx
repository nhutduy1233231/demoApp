import { Empty } from 'antd';

export const isNullOrEmpty = (value: any) => {
    if (
        !value ||
        value === '' ||
        value?.length < 0 ||
        value === 'undefined' ||
        value === undefined ||
        value === null ||
        value === 'null' ||
        value === Empty
    )
        return true;
    return false;
};
