import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const httpApi = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const httpApiMock = new AxiosMockAdapter(httpApi, { delayResponse: 500 });
