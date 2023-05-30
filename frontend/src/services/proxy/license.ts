import { createLicenseApi, deleteLicenseApi, getLicenseDataApi, updateLicenseApi } from '@app/services/api';
import { AppParam } from '@app/interfaces/common';

export const getLicenseDataProxy = async (app: AppParam) => {
    const res = await getLicenseDataApi(app);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const createLicenseProxy = async (input: any) => {
    const res = await createLicenseApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const deleteLicenseProxy = async () => {
    const res = await deleteLicenseApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const updateLicenseProxy = async (input: any) => {
    const res = await updateLicenseApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};
