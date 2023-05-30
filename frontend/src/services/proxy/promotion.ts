import { getPromotionDataApi, createPromotionApi, deletePromotionApi, updatePromotionApi } from '@app/services/api';
import { AppParam } from '@app/interfaces/common';

export const getPromotionDataProxy = async (app: AppParam) => {
    const res = await getPromotionDataApi(app);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const createPromotionProxy = async (input: any) => {
    const res = await createPromotionApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const deletePromotionProxy = async () => {
    const res = await deletePromotionApi();
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};

export const updatePromotionProxy = async (input: any) => {
    const res = await updatePromotionApi(input);
    if (res.data.status === 1) {
        return res.data.data;
    }
    return null;
};
