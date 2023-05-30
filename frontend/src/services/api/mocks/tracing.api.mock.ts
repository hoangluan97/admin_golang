import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('tracing/activity').reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    id: 's24duidfasdg',
                    email: 's24duidfasdg@gmail.com',
                    action: 'login',
                    product: 'biocolab',
                    action_date: Date.now() - 182353,
                },
                {
                    id: 's24duidfasdg',
                    email: 's24duidfasdg@gmail.com',
                    action: 'download study',
                    product: 'talk2data',
                    action_date: Date.now() - 582353,
                },
                {
                    id: 's24duidfasdg',
                    email: 's24duidfasdg@gmail.com',
                    action: 'logout',
                    product: 'biocolab',
                    action_date: Date.now() - 182353,
                },
                {
                    id: 's24duidfasdg',
                    email: 'tri@bioturing.com',
                    action: 'download study',
                    product: 'talk2data',
                    action_date: Date.now() - 182353,
                },
                {
                    id: 's24duidfasdg',
                    email: 's24duidfasdg@gmail.com',
                    action: 'login',
                    product: 'biocolab',
                    action_date: Date.now() - 182353,
                },
                {
                    id: 's24duidfasdg',
                    email: 's24duidfasdg@gmail.com',
                    action: 'login',
                    product: 'biocolab',
                    action_date: Date.now() - 452353,
                },
                {
                    id: 's24duidfasdg',
                    email: 's24duidfasdg@gmail.com',
                    action: 'download study',
                    product: 'talk2data',
                    action_date: Date.now() - 782353,
                },
                {
                    id: 's24duidfasdg',
                    email: 'luan@bioturing.com',
                    action: 'download study',
                    product: 'talk2data',
                    action_date: Date.now() - 582353,
                },
            ],
        },
    ];
});

httpApiMock.onGet('tracing/logger').reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    id: 's24duidfasdg',
                    application_name: 'BioColab',
                    created_at: Date.now() - 14543,
                    content: 'login to BioColab',
                },
                {
                    id: 's45gdfasdg',
                    application_name: 'Vinci',
                    created_at: Date.now() - 45453,
                    content: 'login to Vinci',
                },
                {
                    id: 's78duiasfdg',
                    application_name: 'Talk2Data',
                    created_at: Date.now() - 57533,
                    content: 'login to Talk2Data',
                },
            ],
        },
    ];
});
