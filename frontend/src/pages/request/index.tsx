import { CheckCircleTwoTone, InfoCircleTwoTone, MoreOutlined } from '@ant-design/icons';
import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Popover } from '@app/components/common/Popover/Popover';
import { RequestFilter } from '@app/components/filter/request';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Request } from '@app/interfaces';
import { setFormMode } from '@app/store/slices/generalSlice';
import { getDataRequest } from '@app/store/slices/requestSlice';
import { AppDispatch } from '@app/store/store';
import { filterDataFieldWithCriteria } from '@app/utils/utils';
import { createSelector } from '@reduxjs/toolkit';
import { Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/Button/Button';
import filter from 'lodash.filter';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const getTableData = createSelector(
    [(state) => state.request.data, (state) => state.request.filter],
    (request, filterObj) => {
        const criteria = Object.keys(filterObj);
        if (criteria.length > 0) {
            const filterArray: any = filter(request, (v: any) => {
                let result: any = true;
                criteria.forEach((key: string) => {
                    result = result && filterDataFieldWithCriteria(v[key], filterObj[key]);
                });
                return result;
            });
            return filterArray;
        } else {
            return request;
        }
    },
);

const RequestPage: React.FC = () => {
    const [form] = BaseForm.useForm();
    const { t } = useTranslation();
    const tableData = useAppSelector((state: any) => getTableData(state));
    const dispatch = useDispatch<AppDispatch>();
    console.log('render rq');

    useEffect(() => {
        dispatch(getDataRequest());
    }, []);
    const actionMore = (record: Request) => {
        return (
            <Space align="center">
                <Tooltip title={t('tooltip.mark')}>
                    <Button type="default">{t('table.mark')}</Button>
                </Tooltip>
            </Space>
        );
    };

    const columns: ColumnsType<any> = [
        {
            title: t('table.request_type'),
            dataIndex: 'request_type',
            align: 'left',
            render: (text: string, record: Request) => <span>{record.request_type}</span>,
        },
        {
            title: t('table.name'),
            dataIndex: 'first_name',
            align: 'center',
            render: (text: string, record: Request) => <span>{record.first_name + ' ' + record.last_name}</span>,
        },
        {
            title: t('table.email'),
            dataIndex: 'email',
            align: 'center',
            render: (text: string, record: Request) => <span>{record.email}</span>,
        },
        {
            title: t('table.company'),
            dataIndex: 'company',
            align: 'center',
            render: (text: string, record: Request) => <span>{record.company}</span>,
        },
        {
            title: t('table.research_interests'),
            dataIndex: 'research_interests',
            align: 'center',
            render: (text: string, record: Request) => <span>{record.research_interests}</span>,
        },
        {
            title: t('table.note'),
            dataIndex: 'note',
            align: 'center',
            render: (text: string, record: Request) => <span>{record.note}</span>,
        },
        {
            title: t('table.read_status'),
            dataIndex: 'read_status',
            align: 'center',
            render: (text: string, record: Request) => {
                const date = new Date(record.marked_at);

                return (
                    <span>
                        {record.read_status ? (
                            <Tooltip
                                title={
                                    <>
                                        <div>Marked by: {record.marker}</div>
                                        <div>
                                            Marked at:{' '}
                                            {date.toISOString().slice(0, 10) + ' ' + date.toISOString().slice(11, 19)}
                                        </div>
                                    </>
                                }
                            >
                                <CheckCircleTwoTone twoToneColor="#52c41a" />
                            </Tooltip>
                        ) : (
                            <Tooltip title={t('tooltip.not_marked')}>
                                <InfoCircleTwoTone twoToneColor="#F73859" />
                            </Tooltip>
                        )}
                    </span>
                );
            },
        },
        // {
        //     title: t('table.marker'),
        //     dataIndex: 'marker',
        //     align: 'center',
        //     render: (text: string, record: Request) => <span>{record.marker}</span>,
        // },
        // {
        //     title: t('table.marked_at'),
        //     dataIndex: 'marked_at',
        //     align: 'center',
        //     render: (text: string, record: Request) => <span>{record.marked_at}</span>,
        // },
        {
            title: t('table.actions'),
            dataIndex: 'actions',
            align: 'center',
            render: (text: string, record: Request) => {
                return (
                    <Popover placement="left" title={null} content={actionMore(record)} trigger="click">
                        <Button size={'small'} shape="circle" icon={<MoreOutlined />} />
                    </Popover>
                );
            },
        },
    ];
    return (
        <>
            <Tables columns={columns} tableData={tableData} type={'request'} filter={<RequestFilter />} rowKey={'id'} />
        </>
    );
};

export default RequestPage;
