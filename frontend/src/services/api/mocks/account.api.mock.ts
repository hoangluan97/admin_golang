import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('account/get', { params: { app: 'biocolab' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'Amazon',
                    phone: '123',
                    institution: 'Google',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 153413,
                    stage: 'trial',
                    email: 'luan@bioturing.com',
                    history: 'history here',
                },
                {
                    name: 'phuc',
                    company: 'bioturing',
                    phone: '123',
                    institution: 'bioturing',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 123413,
                    stage: 'paid',
                    history: 'history here',
                    email: 'phuc@bioturing.com',
                },
                {
                    name: 'tri',
                    company: 'bioturing',
                    phone: '123',
                    institution: 'Google',
                    country: 'United States',
                    research_interest: 'cell',
                    desease_interest: ['cancer', 'flu', 'new'],
                    created_at: Date.now(),
                    stage: 'invoice sent',
                    history: 'history here',
                    email: 'tri@bioturing.com',
                },
            ],
        },
    ];
});

httpApiMock.onGet('account/get', { params: { app: 'vinci' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'youtube',
                    phone: '456',
                    institution: 'Google',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 153413,
                    stage: 'trial',
                    email: 'luan@bioturing.com',
                    history: 'history here',
                },
                {
                    name: 'phuc',
                    company: 'bioturing',
                    phone: '456',
                    institution: 'bioturing',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 123413,
                    stage: 'paid',
                    history: 'history here',

                    email: 'phuc@bioturing.com',
                },
                {
                    name: 'tri',
                    company: 'Google',
                    phone: '456',
                    institution: 'bioturing',
                    country: 'United States',
                    research_interest: 'cell',
                    desease_interest: ['cancer', 'flu', 'new'],
                    created_at: Date.now(),
                    stage: 'invoice sent',
                    history: 'history here',
                    email: 'tri@bioturing.com',
                },
            ],
        },
    ];
});

httpApiMock.onGet('account/get', { params: { app: 'bbrowser' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'Google',
                    phone: '012',
                    institution: 'Google',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 153413,
                    stage: 'trial',
                    email: 'luan@bioturing.com',
                    history: 'history here',
                },
                {
                    name: 'phuc',
                    company: 'bioturing',
                    phone: '012',
                    institution: 'bioturing',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 123413,
                    stage: 'paid',
                    history: 'history here',

                    email: 'phuc@bioturing.com',
                },
                {
                    name: 'tri',
                    company: 'bioturing',
                    phone: '012',
                    institution: 'dropbox',
                    country: 'United States',
                    research_interest: 'cell',
                    desease_interest: ['cancer', 'flu', 'new'],
                    created_at: Date.now(),
                    stage: 'invoice sent',
                    history: 'history here',
                    email: 'tri@bioturing.com',
                },
            ],
        },
    ];
});

httpApiMock.onGet('account/get', { params: { app: 'all' } }).reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    name: 'luan',
                    company: 'Google',
                    phone: '789',
                    institution: 'Google',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 153413,
                    stage: 'trial',
                    email: 'luan@bioturing.com',
                    history: 'history here',
                },
                {
                    name: 'phuc',
                    company: 'bioturing',
                    phone: '789',
                    institution: 'bioturing',
                    country: 'United States',
                    research_interest: 'genes',
                    desease_interest: ['cancer', 'flu'],
                    created_at: Date.now() - 123413,
                    stage: 'paid',
                    history: 'history here',

                    email: 'phuc@bioturing.com',
                },
                {
                    name: 'tri',
                    company: 'bioturing',
                    phone: '789',
                    institution: 'Google',
                    country: 'United States',
                    research_interest: 'cell',
                    desease_interest: ['cancer', 'flu', 'new'],
                    created_at: Date.now(),
                    stage: 'invoice sent',
                    history: 'history here',
                    email: 'tri@bioturing.com',
                },
            ],
        },
    ];
});
