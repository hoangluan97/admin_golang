import {
    getInvoiceDataApi,
    createInvoiceApi,
    deleteInvoiceApi,
    updateInvoiceApi,
    getSuggestInvoiceEmailListApi,
} from '@app/services/api';
import { AppParam } from '@app/interfaces/common';

export const getInvoiceDataProxy = async (app: AppParam) => {
    const res = await getInvoiceDataApi(app);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const getSuggestInvoiceEmailListProxy = async () => {
    const res = await getSuggestInvoiceEmailListApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const createInvoiceProxy = async (input: any) => {
    const res = await createInvoiceApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const deleteInvoiceProxy = async () => {
    const res = await deleteInvoiceApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const updateInvoiceProxy = async (input: any) => {
    const res = await updateInvoiceApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};
