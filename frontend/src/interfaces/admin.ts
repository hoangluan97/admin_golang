export interface AdminAccount {
    name: string;
    email: string;
    password: string;
    permissions: any;
}

export interface AdminAccountStore {
    data: Array<AdminAccount>;
    formMode: 'edit' | 'create' | false;
    permissionList: any;
    filter: any;
}
