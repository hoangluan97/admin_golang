import { getAdminAccountDataApi, createAdminAccountApi, updateAdminAccountApi, deleteAdminAccountApi } from '@app/services/api';

export const getAdminAccountDataProxy = async () => {
    const res = await getAdminAccountDataApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const createAdminAccountProxy = async (input: any) => {
    const res = await createAdminAccountApi(input);
    if (res.data.status === 1) {
        return res.data;
    }
    return null;
};

export const deleteAdminAccountProxy = async () => {
    const res = await deleteAdminAccountApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const updateAdminAccountProxy = async (input: any) => {
    const res = await updateAdminAccountApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};
