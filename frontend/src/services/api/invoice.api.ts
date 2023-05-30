import { AppParam } from '@app/interfaces/common';
import { httpApi } from './mocks/http.api.mock';
import './mocks/invoice.api.mock';

export const getInvoiceDataApi = (app: AppParam): Promise<any> => {
    return httpApi.get('invoice/get', { params: app });
};

export const getSuggestInvoiceEmailListApi = (): Promise<any> => {
    return httpApi.get('invoice/email/get');
};

export const createInvoiceApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('invoice/create', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deleteInvoiceApi = (): Promise<any> => {
    return httpApi.get('invoice/delete');
};

export const updateInvoiceApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('invoice/update', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};
