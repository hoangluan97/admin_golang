import { PromotionStore } from '@app/interfaces';
import { AppParam } from '@app/interfaces/common';
import { createPromotionProxy, deletePromotionProxy, getPromotionDataProxy, updatePromotionProxy } from '@app/services/proxy';
import { filterValidObjectProps } from '@app/utils/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: PromotionStore = {
    data: [],
    formMode: false,
    filter: {},
    appState: 'all',
};

export const getDataPromotion = createAsyncThunk('promotion/getPromotionLicense', async (input: AppParam) => {
    const res = await getPromotionDataProxy(input);
    return res;
});

export const createPromotion = createAsyncThunk('promotion/createPromotion', async (input: any) => {
    const res = await createPromotionProxy(input);
    return res;
});

export const updatePromotion = createAsyncThunk('promotion/updatePromotion', async (input: any) => {
    const res = await updatePromotionProxy(input);
    return res;
});

export const deletePromotion = createAsyncThunk('promotion/deletePromotion', async () => {
    const res = await deletePromotionProxy();
    return res;
});

const promotionSlice = createSlice({
    name: 'promotion',
    initialState,
    reducers: {
        setAppstate(state, action) {
            state.appState = action.payload;
        },
        setFilterCreteria(state, action) {
            const validCriteria = filterValidObjectProps(action.payload);
            state.filter = validCriteria;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataPromotion.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const { setFilterCreteria, setAppstate } = promotionSlice.actions;

export default promotionSlice.reducer;
