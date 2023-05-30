import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('setting/admin_account/get').reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    email: 'luan@bioturing.com',
                    password: 'password',
                    permissions: {
                        academic: true,
                        enterprise: true,
                        setting: true,
                    },
                },
                {
                    name: 'phuc',
                    email: 'phuc@bioturing.com',
                    password: 'password',
                    permissions: {
                        academic: true,
                        enterprise: true,
                        setting: true,
                    },
                },
                {
                    name: 'tri',
                    email: 'tri@bioturing.com',
                    password: 'password',
                    permissions: {
                        academic: true,
                        enterprise: true,
                        setting: true,
                    },
                },
            ],
        },
    ];
});

httpApiMock.onPost('setting/admin_account/create').reply(() => {
    return [200, { status: 1, response: 'Created successfully' }];
});

// {
//   account_create_bbrowser
//   :
//   false,
//   account_create_biocolab
//   :
//   false,
//   account_create_vinci
//   :
//   false,
//   account_delete_bbrowser
//   :
//   false,
//   account_delete_biocolab
//   :
//   false,
//   account_delete_vinci
//   :
//   false,
//   account_read_bbrowser
//   :
//   false,
//   account_read_biocolab
//   :
//   false,
//   account_read_vinci
//   :
//   false,
//   account_update_bbrowser
//   :
//   false,
//   account_update_biocolab
//   :
//   false,
//   account_update_vinci
//   :
//   false,
//   admin_account_create
//   :
//   true,
//   admin_account_delete
//   :
//   true,
//   admin_account_read
//   :
//   true,
//   admin_account_update
//   :
//   true,
//   invoice_create_bbrowser
//   :
//   false,
//   invoice_create_biocolab
//   :
//   false,
//   invoice_create_vinci
//   :
//   false,
//   invoice_delete_bbrowser
//   :
//   false,
//   invoice_delete_biocolab
//   :
//   false,
//   invoice_delete_vinci
//   :
//   false,
//   invoice_read_bbrowser
//   :
//   false,
//   invoice_read_biocolab
//   :
//   false,
//   invoice_read_vinci
//   :
//   false,
//   invoice_update_bbrowser
//   :
//   false,
//   invoice_update_biocolab
//   :
//   false,
//   invoice_update_vinci
//   :
//   false,
//   license_create_bbrowser
//   :
//   false,
//   license_create_biocolab
//   :
//   false,
//   license_create_vinci
//   :
//   false,
//   license_delete_bbrowser
//   :
//   false,
//   license_delete_biocolab
//   :
//   false,
//   license_delete_vinci
//   :
//   false,
//   license_read_bbrowser
//   :
//   false,
//   license_read_biocolab
//   :
//   false,
//   license_read_vinci
//   :
//   false,
//   license_update_bbrowser
//   :
//   false,
//   license_update_biocolab
//   :
//   false,
//   license_update_vinci
//   :
//   false,
// }
