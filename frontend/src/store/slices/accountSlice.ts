import { AccountStore } from '@app/interfaces';
import { AppParam } from '@app/interfaces/common';
import { createAccountProxy, deleteAccountProxy, getAccountDataProxy, updateAccountProxy } from '@app/services/proxy';
import { filterValidObjectProps } from '@app/utils/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: AccountStore = {
    formMode: false,
    filter: {},
    appState: 'all',
};

export const createAccount = createAsyncThunk('account/createAccount', async (input: any) => {
    const res = await createAccountProxy(input);
    return res;
});

export const updateAccount = createAsyncThunk('account/updateAccount', async (input: any) => {
    const res = await updateAccountProxy(input);
    return res;
});

export const deleteAccount = createAsyncThunk('account/deleteAccount', async () => {
    const res = await deleteAccountProxy();
    return res;
});

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAppState(state, action) {
            state.appState = action.payload;
        },
        setFormMode(state, action) {
            state.formMode = action.payload;
        },
        setFilterCreteria(state, action) {
            const validCriteria = filterValidObjectProps(action.payload);
            state.filter = validCriteria;
        },
    },
    extraReducers: (builder) => {
    },
});

export default accountSlice.reducer;

export const { setAppState, setFormMode, setFilterCreteria } = accountSlice.actions;
