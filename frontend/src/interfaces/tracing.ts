export interface Activity {
    email: string;
    id: string;
    action: string;
    product: string;
    action_date: number;
}

export interface Logger {
    content: string;
    id: string;
    application_name: string;
    created_at: number;
}

export interface TracingStore {
    activityData: Activity[];
    loggerData: Logger[];
    displayTypeActivity: 'chart' | 'table';
    displayTypeLogger: 'chart' | 'table';
    filterActivity: any;
    filterLogger: any;
    appState: 'bbrowser' | 'biocolab' | 'vinci' | 'all';
}
