import { AppParam } from '@app/interfaces/common';
import { httpApi } from './mocks/http.api.mock';
import './mocks/promotion.api.mock';

export const getPromotionDataApi = (app: AppParam): Promise<any> => {
    return httpApi.get('promotion/get', { params: app });
};

export const createPromotionApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('promotion/create', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deletePromotionApi = (): Promise<any> => {
    return httpApi.get('promotion/delete');
};

export const updatePromotionApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('promotion/update', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};
