import { getUserDataApi } from '@app/services/api';

export const getUserDataProxy = async () => {
    const res = await getUserDataApi();
    return res.data;
};
