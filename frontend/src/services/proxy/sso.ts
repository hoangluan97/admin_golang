import { getSSODataApi, createSSOApi, deleteSSOApi, updateSSOApi } from '@app/services/api';

export const getSSODataProxy = async () => {
    const res = await getSSODataApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const createSSOProxy = async (input: any) => {
    const res = await createSSOApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const deleteSSOProxy = async () => {
    const res = await deleteSSOApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const updateSSOProxy = async (input: any) => {
    const res = await updateSSOApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};
