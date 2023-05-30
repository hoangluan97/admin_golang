import { getUserDataProxy } from '@app/services/proxy/user';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserStore } from '@app/interfaces';
const initialState: UserStore = {
    data: null,
};

export const getDataUser = createAsyncThunk('user/getUserData', async () => {
    const res = await getUserDataProxy();
    return res;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataUser.fulfilled, (state, action) => {
            state.data = action.payload.user;
        });
    },
});

export default userSlice.reducer;
export const { setUserData } = userSlice.actions;
