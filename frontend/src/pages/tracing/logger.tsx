import { Chart } from '@app/components/charts/Chart';
import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { LoggerFilter } from '@app/components/filter/tracing/logger';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Logger } from '@app/interfaces';
import { getDataLogger } from '@app/store/slices/tracingSlice';
import { AppDispatch } from '@app/store/store';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const LoggerPage: React.FC = () => {
    const { t } = useTranslation();
    const tracingState = useAppSelector((state) => state.tracing);
    const dispatch = useDispatch<AppDispatch>();
    console.log('render logger');

    useEffect(() => {
        dispatch(getDataLogger());
    }, []);

    const columns: ColumnsType<any> = [
        {
            title: t('table.id'),
            dataIndex: 'id',
            align: 'center',
            render: (text: string, record: Logger) => <span>{record.id}</span>,
        },
        {
            title: t('table.application_name'),
            dataIndex: 'application_name',
            align: 'center',
            render: (text: string, record: Logger) => <span>{record.application_name}</span>,
        },
        {
            title: t('table.content'),
            dataIndex: 'content',
            align: 'center',
            render: (text: string, record: Logger) => <span>{record.content}</span>,
        },
        {
            title: t('table.created_at'),
            dataIndex: 'created_at',
            align: 'center',
            render: (text: string, record: Logger) => {
                const date = new Date(record.created_at);
                return <span>{date.toISOString().slice(0, 10) + ' ' + date.toISOString().slice(11, 19)}</span>;
            },
        },
    ];
    return (
        <>
            {tracingState.displayTypeLogger === 'table' ? (
                <Tables
                    columns={columns}
                    tableData={tracingState.loggerData}
                    type={'logger'}
                    rowKey={'id'}
                    filter={<LoggerFilter />}
                />
            ) : (
                <Chart type={'logger'} filter={<LoggerFilter />} />
            )}
        </>
    );
};

export default LoggerPage;
