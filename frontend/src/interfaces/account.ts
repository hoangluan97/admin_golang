export interface Account {
    name: string;
    email: string;
    phone: string;
    country: string;
    institution: string;
    disease_interest: string;
    password?: string;
    stage: string;
    valid?: Boolean;
    isUnsubscribe?: boolean;
    note?: string;
    score?: number;
    freeLicense?: string;
    payload?: Array<any>;
    research_interest: Array<string>;
    keyId?: string;
    keySecret?: string;
    keyConfig?: number;
    keyUpdatedAt?: string;
    history: string;
}

export interface AccountStore {
    formMode: 'edit' | 'create' | false;
    filter: any;
    appState: 'bbrowser' | 'biocolab' | 'vinci' | 'all';
    // accountType: 'academic' | 'enterprise';
}
