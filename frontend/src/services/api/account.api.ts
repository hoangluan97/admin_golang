import { httpApi } from './mocks/http.api.mock';
import './mocks/account.api.mock';
import { AppParam } from '@app/interfaces/common';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAccountDataApi = (app: AppParam): Promise<any> => {
    return httpApi.get('account/get', { params: app });
};

export const createAccountApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('account/create', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const deleteAccountApi = (): Promise<any> => {
    return httpApi.get('account/delete');
};

export const updateAccountApi = (input: any): Promise<any> => {
    const objectKeys = Object.keys(input);
    const data = new FormData();
    for (const key of objectKeys) {
        data.append(key, input[key]);
    }

    return httpApi.post('account/update', data, { headers: { 'Content-Type': 'multipart/form-data' } });
};

// export const userApi = createApi({
//     reducerPath: "userApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: 
//     }),
//     tagTypes: ["User"],
//     endpoints: (builder) => ({
//       getMe: builder.query<IUser, null>({
//         query() {
//           return {
//             url: "users/me",
//             credentials: "include",
//           };
//         },
//         transformResponse: (result: { data: { user: IUser } }) =>
//           result.data.user,
//         async onQueryStarted(_args, { dispatch, queryFulfilled }) {
//           try {
//             const { data } = await queryFulfilled;
//             dispatch(setUser(data));
//           } catch (error) {}
//         },
//       }),
//     }),
//   });
