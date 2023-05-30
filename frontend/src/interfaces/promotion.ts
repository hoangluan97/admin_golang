export interface Promotion {
    creator: string;
    code: string;
    applied_product: string;
    active_day: number;
    active_email: string;
    activates: string;
    discount_amount: string;
    usage: boolean;
    discount_type: string;
    expired_day: number;
}

export interface PromotionStore {
    data: Array<Promotion>;
    formMode: 'edit' | 'create' | false;
    filter: any;
    appState: 'bbrowser' | 'biocolab' | 'vinci' | 'all';
}
