import { InvoiceStore } from '@app/interfaces';
import {
    createInvoiceProxy,
    deleteInvoiceProxy,
    getInvoiceDataProxy,
    getSuggestInvoiceEmailListProxy,
    updateInvoiceProxy,
} from '@app/services/proxy';
import { filterValidObjectProps } from '@app/utils/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: InvoiceStore = {
    data: [],
    formMode: false,
    suggestEmail: [],
    filter: {},
    appState: 'all',
};

export const getDataInvoice = createAsyncThunk('invoice/getDataInvoice', async (input: any) => {
    const res = await getInvoiceDataProxy(input);
    return res;
});

export const createInvoice = createAsyncThunk('invoice/createInvoice', async (input: any) => {
    const res = await createInvoiceProxy(input);
    return res;
});

export const updateInvoice = createAsyncThunk('invoice/updateInvoice', async (input: any) => {
    const res = await updateInvoiceProxy(input);
    return res;
});

export const deleteInvoice = createAsyncThunk('invoice/deleteInvoice', async () => {
    const res = await deleteInvoiceProxy();
    return res;
});

export const getInvoiceEmailList = createAsyncThunk('invoice/getInvoiceEmailList', async () => {
    const res = await getSuggestInvoiceEmailListProxy();
    return res;
});

const invoiceSlice = createSlice({
    name: 'invoice',
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
        builder.addCase(getDataInvoice.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getInvoiceEmailList.fulfilled, (state, action) => {
            state.suggestEmail = action.payload;
        });
    },
});

export default invoiceSlice.reducer;

export const { setFilterCreteria, setAppstate } = invoiceSlice.actions;
