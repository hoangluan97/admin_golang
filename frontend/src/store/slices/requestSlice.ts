import { RequestStore } from '@app/interfaces';
import { getRequestDataProxy } from '@app/services/proxy';
import { filterValidObjectProps } from '@app/utils/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: RequestStore = {
    data: [],
    filter: {},
};

export const getDataRequest = createAsyncThunk('request/getDataRequest', async () => {
    const res = await getRequestDataProxy();
    return res;
});

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        setFilterCreteria(state, action) {
            const validCriteria = filterValidObjectProps(action.payload);
            state.filter = validCriteria;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataRequest.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const { setFilterCreteria } = requestSlice.actions;

export default requestSlice.reducer;
