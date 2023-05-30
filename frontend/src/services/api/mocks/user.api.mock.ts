import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

httpApiMock.onGet('user/get').reply(() => {
    return [
        200,
        {
            user: {
                id: 1,
                firstName: 'Chris',
                lastName: 'Johnson',
                imgUrl: avatarImg,
                userName: '@john1989',
                permissions: { academic: true, enterprise: true, setting: true, tracing: true, request: true },
            },
        },
    ];
});
