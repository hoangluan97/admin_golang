import { AdminAccountStore } from '@app/interfaces';
import {
    getAdminAccountDataProxy,
    createAdminAccountProxy,
    updateAdminAccountProxy,
    deleteAdminAccountProxy,
} from '@app/services/proxy';
import { filterValidObjectProps } from '@app/utils/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: AdminAccountStore = {
    data: [],
    formMode: false,
    permissionList: {},
    filter: {},
};

export const getDataAdminAccount = createAsyncThunk('admin/getDataAdminAccount', async () => {
    const res = await getAdminAccountDataProxy();
    return res;
});

export const createAccountAdmin = createAsyncThunk('admin/createAccountAdmin', async (input: any) => {
    const res = await createAdminAccountProxy(input);
    return res;
});

export const updateAccountAdmin = createAsyncThunk('admin/updateAccountAdmin', async (input: any) => {
    const res = await updateAdminAccountProxy(input);
    return res;
});

export const deleteAccountAdmin = createAsyncThunk('admin/deleteAccountAdmin', async () => {
    const res = await deleteAdminAccountProxy();
    return res;
});

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setFormMode(state, action) {
            state.formMode = action.payload;
        },
        setPermission(state, action) {
            const { selectedPermission, func, app } = action.payload;
            if (func !== 'admin_account') {
                if (!state.permissionList.hasOwnProperty(func)) {
                    const funcPermission: any = {};
                    funcPermission[app] = selectedPermission;
                    state.permissionList[func] = funcPermission;
                } else {
                    state.permissionList[func][app] = selectedPermission;
                }
            } else {
                state.permissionList[func] = selectedPermission;
            }
        },
        setFilterCreteria(state, action) {
            const validCriteria = filterValidObjectProps(action.payload);
            state.filter = validCriteria;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataAdminAccount.fulfilled, (state: AdminAccountStore, action: any) => {
            state.data = action.payload;
        });
    },
});

export default adminSlice.reducer;

export const { setFilterCreteria, setPermission } = adminSlice.actions;
