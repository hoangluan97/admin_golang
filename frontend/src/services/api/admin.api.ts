import { httpApi } from './mocks/http.api.mock';
import './mocks/admin.api.mock';

export const getAdminAccountDataApi = (): Promise<any> => {
    return httpApi.get('setting/admin_account/get');
};

export const createAdminAccountApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }
    return httpApi.post('setting/admin_account/create', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deleteAdminAccountApi = (): Promise<any> => {
    return httpApi.get('setting/admin_account/delete');
};

export const updateAdminAccountApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('setting/admin_account/update', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};
