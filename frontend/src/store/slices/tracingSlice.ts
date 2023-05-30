import { TracingStore } from '@app/interfaces';
import { getLoggerDataProxy, getActivityDataProxy } from '@app/services/proxy';
import { filterValidObjectProps } from '@app/utils/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: TracingStore = {
    activityData: [],
    loggerData: [],
    displayTypeActivity: 'table',
    displayTypeLogger: 'table',
    filterActivity: {},
    filterLogger: {},
    appState: 'all',
};

export const getDataActivities = createAsyncThunk('tracing/getDataActivities', async () => {
    const res = await getActivityDataProxy();
    return res;
});

export const getDataLogger = createAsyncThunk('tracing/getDataLogger', async () => {
    const res = await getLoggerDataProxy();
    return res;
});

const tracingSlice = createSlice({
    name: 'tracing',
    initialState,
    reducers: {
        setAppstate(state, action) {
            state.appState = action.payload;
        },
        setDisplayModeActivity(state, action) {
            state.displayTypeActivity = action.payload;
        },
        setFilterCriteriaActivity(state, action) {
            const validCriteria = filterValidObjectProps(action.payload);
            state.filterActivity = validCriteria;
        },
        setDisplayModeLogger(state, action) {
            state.displayTypeLogger = action.payload;
        },
        setFilterCriteriaLogger(state, action) {
            const validCriteria = filterValidObjectProps(action.payload);
            state.filterLogger = validCriteria;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataActivities.fulfilled, (state, action) => {
            state.activityData = action.payload;
        });
        builder.addCase(getDataLogger.fulfilled, (state, action) => {
            state.loggerData = action.payload;
        });
    },
});

export default tracingSlice.reducer;

export const {
    setAppstate,
    setDisplayModeActivity,
    setFilterCriteriaActivity,
    setDisplayModeLogger,
    setFilterCriteriaLogger,
} = tracingSlice.actions;
