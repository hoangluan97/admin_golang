export interface Invoice {
    name: string;

    phone: string;
    institution: string;
    country: string;
    email: string;
    quote_id: string;
    invoice_id: string;
    type_id: string;
    packages: Array<string>;
    unit_price: number;
    status: boolean;
    module?: string;
    period?: number;
    score?: number;
    number_of_licenses?: number;
    custom?: boolean;
}

export interface InvoiceStore {
    data: Array<Invoice>;
    formMode: 'edit' | 'create' | false;
    suggestEmail: Array<string>;
    filter: any;
    appState: 'bbrowser' | 'biocolab' | 'vinci' | 'all';
}
