import { getActivityDataApi, getLoggerDataApi } from '@app/services/api';

export const getActivityDataProxy = async () => {
    const res = await getActivityDataApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const getLoggerDataProxy = async () => {
    const res = await getLoggerDataApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};
