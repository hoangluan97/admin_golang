import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('promotion/get', { params: { app: 'bbrowser' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'luan',
                    code: 'ofidfnd0fubdf',
                    applied_product: 'BioColab',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'phuc',
                    code: 'ofigjnd0fubdf',
                    applied_product: 'Vinci',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'tri',
                    code: 'ofigjnd0f23df',
                    applied_product: 'Talk2data',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '1200',
                    discount_type: 'cash',
                    usage: false,
                },
            ],
        },
    ];
});

httpApiMock.onGet('promotion/get', { params: { app: 'biocolab' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'luan',
                    code: 'ofidfnd0fubdf',
                    applied_product: 'BioColab',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'phuc',
                    code: 'ofigjnd0fubdf',
                    applied_product: 'Vinci',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'nguyen',
                    code: 'ofigjnd0f23df',
                    applied_product: 'Talk2data',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '1200',
                    discount_type: 'cash',
                    usage: false,
                },
            ],
        },
    ];
});

httpApiMock.onGet('promotion/get', { params: { app: 'vinci' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'luan',
                    code: 'ofidfnd0fubdf',
                    applied_product: 'BioColab',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'hoang',
                    code: 'ofigjnd0fubdf',
                    applied_product: 'Vinci',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'nguyen',
                    code: 'ofigjnd0f23df',
                    applied_product: 'Talk2data',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '1200',
                    discount_type: 'cash',
                    usage: false,
                },
            ],
        },
    ];
});

httpApiMock.onGet('promotion/get', { params: { app: 'all' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'luan',
                    code: 'ofidfnd0fubdf',
                    applied_product: 'BioColab',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'nguyen',
                    code: 'ofigjnd0fubdf',
                    applied_product: 'Vinci',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '20',
                    discount_type: 'percent',
                    usage: true,
                },
                {
                    creator: 'nguyen',
                    code: 'ofigjnd0f23df',
                    applied_product: 'Talk2data',
                    expired_day: Date.now() + 342421,
                    active_day: Date.now() + 3424,
                    active_email: 'luan@bioturing.com',
                    discount_amount: '1200',
                    discount_type: 'cash',
                    usage: false,
                },
            ],
        },
    ];
});
