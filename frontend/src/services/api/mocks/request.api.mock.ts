import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('request/get').reply(() => {
    return [
        200,
        {
            status: 1,
            data: [
                {
                    id: 'ahsdvkuasdv',
                    request_type: 'Request information',
                    first_name: 'John',
                    last_name: 'Smith',
                    email: 'john.smith@gmail.com',
                    company: 'Bioturing',
                    research_interests: 'research interest',
                    note: 'Please add a note',
                    read_status: true,
                    marker: 'luannguyen@bioturing.com',
                    marked_at: Date.now() - 153413,
                },
                {
                    id: 'ahsdvkuasd',
                    request_type: 'Request a training',
                    first_name: 'nguyen',
                    last_name: 'nguyen',
                    email: 'nguyen.nguyen@gmail.com',
                    company: 'Bioturing',
                    research_interests: 'research interest',
                    note: 'Please add a note',
                    read_status: false,
                    marked_at: 0,
                    marker: '',
                },
                {
                    id: 'ahsdvkuasda',
                    request_type: 'Have a representative contact me',
                    first_name: 'nguyen',
                    last_name: 'tri',
                    email: 'tri.nguyen@gmail.com',
                    company: 'Bioturing',
                    research_interests: 'research interest',
                    note: 'Please add a note',
                    read_status: true,
                    marked_at: Date.now() - 753413,
                    marker: 'phuc@bioturing.com',
                },
            ],
        },
    ];
});
