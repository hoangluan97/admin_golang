export interface License {
    creator: string;
    reason: string;
    quote_id: string;
    limit: number;
    packages: string;
    // packages: Array<string>,
    activates: Array<string>;
    download_studies: Array<string>;
    active: boolean;
    key: string;
    expired_day: number;
}

export interface LicenseStore {
    data: Array<License>;
    formMode: 'edit' | 'create' | false;
    filter: any;
    appState: 'bbrowser' | 'biocolab' | 'vinci' | 'all';
}
