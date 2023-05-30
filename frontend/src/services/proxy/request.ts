import { getRequestDataApi } from '@app/services/api';

export const getRequestDataProxy = async () => {
    const res = await getRequestDataApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};
