import { httpApi } from './mocks/http.api.mock';
import './mocks/tracing.api.mock';

export const getActivityDataApi = (): Promise<any> => {
    return httpApi.get('tracing/activity');
};

export const getLoggerDataApi = (): Promise<any> => {
    return httpApi.get('tracing/logger');
};
