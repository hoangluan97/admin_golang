import { httpApi } from './mocks/http.api.mock';
import './mocks/sso.api.mock';

export const getSSODataApi = (): Promise<any> => {
    return httpApi.get('sso/get');
};

export const createSSOApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('sso/create', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deleteSSOApi = (): Promise<any> => {
    return httpApi.get('sso/delete');
};

export const updateSSOApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('sso/update', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};
