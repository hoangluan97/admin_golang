import { FunctionComponent } from 'react';
import { NumericLiteral } from 'typescript';

export type Dimension = number | string;

export type ChartData = number[];

export type xData = number[] | string[];

export type LanguageType = 'de' | 'en';

export type ThemeType = 'light' | 'dark';

export interface ChartSeries {
    seriesName: string;
    value: number;
    data: {
        day: number;
        value: NumericLiteral;
    };
    name: string;
}

export type ChartSeriesData = ChartSeries[];

export type Severity = 'success' | 'error' | 'info' | 'warning';

export type TwoFactorAuthOption = 'email' | 'phone';

export interface CommonStore {
    formMode: 'edit' | 'create' | 'export' | false;
    editData: any;
    exportType: 'pdf' | 'csv' | false;
    exportName: string;
}

export interface AppParam {
    app: string;
}

export interface BreadcrumbData {
    page: string;
    type?: string;
}

export interface PropsAccountType {
    AccountType: string;
}
