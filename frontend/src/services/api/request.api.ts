import { httpApi } from './mocks/http.api.mock';
import './mocks/request.api.mock';

export const getRequestDataApi = (): Promise<any> => {
    return httpApi.get('request/get');
};
