import { Chart } from '@app/components/charts/Chart';
import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { ActivityFilter } from '@app/components/filter/tracing/activity';
import { InvoiceForm } from '@app/components/form/formInvoice';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Activity } from '@app/interfaces';
import { setFormMode } from '@app/store/slices/generalSlice';
import { getDataActivities } from '@app/store/slices/tracingSlice';
import { AppDispatch } from '@app/store/store';
import { filterDataFieldWithCriteria } from '@app/utils/utils';
import { createSelector } from '@reduxjs/toolkit';
import { ColumnsType } from 'antd/es/table';
import filter from 'lodash.filter';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const getTableData = createSelector(
    [(state) => state.tracing.data, (state) => state.tracing.filter],
    (activity, filterObj) => {
        const criteria = Object.keys(filterObj);
        if (criteria.length > 0) {
            const filterArray = filter(activity, (v: any) => {
                let result: any = true;
                criteria.forEach((key: string) => {
                    result = result && filterDataFieldWithCriteria(v[key], filterObj[key]);
                });
                return result;
            });
            return filterArray;
        } else {
            return activity;
        }
    },
);

const ActivityPage: React.FC = () => {
    const { t } = useTranslation();
    const tracingState = useAppSelector((state) => state.tracing);
    const dispatch = useDispatch<AppDispatch>();
    const [form] = BaseForm.useForm();
    console.log('render acct');

    useEffect(() => {
        dispatch(getDataActivities());
    }, []);

    const columns: ColumnsType<any> = [
        {
            title: t('table.id'),
            dataIndex: 'id',
            align: 'center',
            render: (text: string, record: Activity) => <span>{record.id}</span>,
        },
        {
            title: t('table.email'),
            dataIndex: 'email',
            align: 'center',
            render: (text: string, record: Activity) => <span>{record.email}</span>,
        },
        {
            title: t('table.action'),
            dataIndex: 'action',
            align: 'center',
            render: (text: string, record: Activity) => <span>{record.action}</span>,
        },
        {
            title: t('table.product'),
            dataIndex: 'product',
            align: 'center',
            render: (text: string, record: Activity) => <span>{record.product}</span>,
        },
        {
            title: t('table.created_at'),
            dataIndex: 'created_at',
            align: 'center',
            render: (text: string, record: Activity) => {
                const date = new Date(record.action_date);
                return <span>{date.toISOString().slice(0, 10) + ' ' + date.toISOString().slice(11, 19)}</span>;
            },
        },
    ];
    return (
        <>
            {tracingState.displayTypeActivity === 'table' ? (
                <Tables
                    columns={columns}
                    tableData={tracingState.activityData}
                    type={'activity'}
                    rowKey={'id'}
                    filter={<ActivityFilter />}
                />
            ) : (
                <Chart type={'activity'} filter={<ActivityFilter />} />
            )}
        </>
    );
};

export default ActivityPage;
