import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('license/get', { params: { app: 'bbrowser' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'luan',
                    quote_id: 'ofigjnd0fubdf',
                    reason: 'for testing',
                    packages: ['vinci', 'biocolab'],
                    expired_day: Date.now(),
                },
                {
                    creator: 'phuc',
                    quote_id: 'sdgsdfbs5q34234',
                    reason: 'commercial testing',
                    packages: ['vinci'],
                    expired_day: Date.now() + 8341235,
                },
                {
                    creator: 'luan',
                    quote_id: 'sgsd098g7s90dg7',
                    reason: 'another testing',
                    packages: ['bbrowser', 'biocolab'],
                    expired_day: Date.now() + 4345345,
                },
            ],
        },
    ];
});

httpApiMock.onGet('license/get', { params: { app: 'all' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'nguyen',
                    quote_id: 'ofigjnd0fubdf',
                    reason: 'for testing',
                    packages: ['vinci', 'biocolab'],
                    expired_day: Date.now(),
                },
                {
                    creator: 'luan',
                    quote_id: 'sdgsdfbs5q34234',
                    reason: 'commercial testing',
                    packages: ['vinci'],
                    expired_day: Date.now() + 8341235,
                },
                {
                    creator: 'hoang',
                    quote_id: 'sgsd098g7s90dg7',
                    reason: 'another testing',
                    packages: ['bbrowser', 'biocolab'],
                    expired_day: Date.now() + 4345345,
                },
            ],
        },
    ];
});

httpApiMock.onGet('license/get', { params: { app: 'biocolab' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'nguyen',
                    quote_id: 'ofigjnd0fubdf',
                    reason: 'for testing',
                    packages: ['vinci', 'biocolab'],
                    expired_day: Date.now(),
                },
                {
                    creator: 'phuc',
                    quote_id: 'sdgsdfbs5q34234',
                    reason: 'commercial testing',
                    packages: ['vinci'],
                    expired_day: Date.now() + 8341235,
                },
                {
                    creator: 'hoang',
                    quote_id: 'sgsd098g7s90dg7',
                    reason: 'another testing',
                    packages: ['bbrowser', 'biocolab'],
                    expired_day: Date.now() + 4345345,
                },
            ],
        },
    ];
});

httpApiMock.onGet('license/get', { params: { app: 'vinci' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    creator: 'luan',
                    quote_id: 'ofigjnd0fubdf',
                    reason: 'for testing',
                    packages: ['vinci', 'biocolab'],
                    expired_day: Date.now(),
                },
                {
                    creator: 'phuc',
                    quote_id: 'sdgsdfbs5q34234',
                    reason: 'commercial testing',
                    packages: ['vinci'],
                    expired_day: Date.now() + 8341235,
                },
                {
                    creator: 'hoang',
                    quote_id: 'sgsd098g7s90dg7',
                    reason: 'another testing',
                    packages: ['bbrowser', 'biocolab'],
                    expired_day: Date.now() + 4345345,
                },
            ],
        },
    ];
});
