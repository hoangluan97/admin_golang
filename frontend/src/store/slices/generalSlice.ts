import { CommonStore } from '@app/interfaces/common';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CommonStore = {
    formMode: false,
    editData: null,
    exportType: false,
    exportName: '',
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setFormMode(state, action) {
            state.formMode = action.payload.mode;
            state.editData = action.payload.editData;
        },
        setExportType(state, action) {
            state.exportType = action.payload;
        },
        setExportName(state, action) {
            state.exportName = action.payload;
        },
    },
});

export default generalSlice.reducer;
export const { setFormMode, setExportType, setExportName } = generalSlice.actions;
