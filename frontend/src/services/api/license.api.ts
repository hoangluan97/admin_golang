import { AppParam } from '@app/interfaces/common';
import { httpApi } from './mocks/http.api.mock';
import './mocks/license.api.mock';

export const getLicenseDataApi = (app: AppParam): Promise<any> => {
    return httpApi.get('license/get', { params: app });
};

export const createLicenseApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('license/create', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deleteLicenseApi = (): Promise<any> => {
    return httpApi.get('license/delete');
};

export const updateLicenseApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('license/update', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};
