import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('invoice/get', { params: { app: 'bbrowser' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'Google',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdf',
                    invoice_id: 'aiueh9rtys7824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
                {
                    name: 'phuc',
                    company: 'bioturing',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdhf',
                    invoice_id: 'aiueh978ty24',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: false,
                },
                {
                    name: 'tri',
                    company: 'dropbox',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Dropbox',
                    country: 'United States',
                    quote_id: 'ofigjnd0fuygbdf',
                    invoice_id: 'aiueh97824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
            ],
        },
    ];
});

httpApiMock.onGet('invoice/get', { params: { app: 'biocolab' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'Google',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdf',
                    invoice_id: 'aiueh9rtys7824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
                {
                    name: 'phuc',
                    company: 'bioturing',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdhf',
                    invoice_id: 'aiueh978ty24',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: false,
                },
                {
                    name: 'tri',
                    company: 'Youtube',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Dropbox',
                    country: 'United States',
                    quote_id: 'ofigjnd0fuygbdf',
                    invoice_id: 'aiueh97824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
            ],
        },
    ];
});

httpApiMock.onGet('invoice/get', { params: { app: 'all' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'Google',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdf',
                    invoice_id: 'aiueh9rtys7824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
                {
                    name: 'phuc',
                    company: 'Bioturing',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdhf',
                    invoice_id: 'aiueh978ty24',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: false,
                },
                {
                    name: 'tri',
                    company: 'Bioturing',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Dropbox',
                    country: 'United States',
                    quote_id: 'ofigjnd0fuygbdf',
                    invoice_id: 'aiueh97824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
            ],
        },
    ];
});

httpApiMock.onGet('invoice/get', { params: { app: 'vinci' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'Youtube',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdf',
                    invoice_id: 'aiueh9rtys7824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
                {
                    name: 'phuc',
                    company: 'bioturing',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Google',
                    country: 'United States',
                    quote_id: 'ofigjnd0fubdhf',
                    invoice_id: 'aiueh978ty24',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: false,
                },
                {
                    name: 'tri',
                    company: 'dropbox',
                    phone: '123',
                    email: '@gmail.com',
                    institution: 'Dropbox',
                    country: 'United States',
                    quote_id: 'ofigjnd0fuygbdf',
                    invoice_id: 'aiueh97824',
                    packages: ['Vinci', 'BioColab'],
                    unit_price: '1200',
                    status: true,
                },
            ],
        },
    ];
});

httpApiMock.onGet('invoice/email/get').reply(() => {
    return [200, { status: 1, data: ['@bioturing.com', '@gmail.com', '@fb.com'] }];
});
