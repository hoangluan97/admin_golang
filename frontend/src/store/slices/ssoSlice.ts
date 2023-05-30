import { SsoStore } from '@app/interfaces/sso';
import { createSSOProxy, deleteSSOProxy, getSSODataProxy, updateSSOProxy } from '@app/services/proxy';
import { filterValidObjectProps } from '@app/utils/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: SsoStore = {
    data: [],
    config: null,
    filter: {},
    appState: 'all',
};

export const getDataSSO = createAsyncThunk('sso/getDataSSO', async () => {
    const res = await getSSODataProxy();
    return res;
});

export const createSSO = createAsyncThunk('sso/createSSO', async (input: any) => {
    const res = await createSSOProxy(input);

    return res;
});

export const updateSSO = createAsyncThunk('sso/updateSSO', async (input: any) => {
    const res = await updateSSOProxy(input);

    return res;
});

export const deleteSSO = createAsyncThunk('sso/deleteSSO', async () => {
    const res = await deleteSSOProxy();

    return res;
});

const ssoSlice = createSlice({
    name: 'sso',
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
        builder.addCase(getDataSSO.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(createSSO.fulfilled, (state, action) => {
            state.config = action.payload;
        });
        builder.addCase(updateSSO.fulfilled, (state, action) => {
            state.config = action.payload;
        });
    },
});

export default ssoSlice.reducer;

export const { setFilterCreteria } = ssoSlice.actions;
