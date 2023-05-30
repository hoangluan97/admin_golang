export interface AuthProvider {
    id: string;
    app_name: string;
    display_name: string;
    protocol: string;
    type: string;
    sub_type: string;
    content: string;
    status: number;
    order: number;
    allow_domains: string;
    callback_url: string;
    disable_ssl: number;
    updated_at: number;
    created_at: number;
}

export interface SsoStore {
    data: AuthProvider[];
    config: any;
    filter: any;
    appState: 'bbrowser' | 'biocolab' | 'vinci' | 'all';
}
