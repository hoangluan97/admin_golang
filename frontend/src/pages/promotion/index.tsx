import { MoreOutlined } from '@ant-design/icons';
import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Popconfirm } from '@app/components/common/Popconfirm/Popconfirm';
import { Popover } from '@app/components/common/Popover/Popover';
import { PromotionFilter } from '@app/components/filter/promotion';
import { AccountForm } from '@app/components/form/formAccount';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Promotion } from '@app/interfaces';
import { PropsAccountType } from '@app/interfaces/common';
import { setFormMode } from '@app/store/slices/generalSlice';
import { getDataPromotion, setAppstate } from '@app/store/slices/promotionSlice';
import { AppDispatch } from '@app/store/store';
import { filterDataFieldWithCriteria } from '@app/utils/utils';
import { createSelector } from '@reduxjs/toolkit';
import { Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/Button/Button';
import filter from 'lodash.filter';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const getTableData = createSelector(
    [(state) => state.promotion.data, (state) => state.promotion.filter],
    (promotion, filterObj) => {
        const criteria = Object.keys(filterObj);
        if (criteria.length > 0) {
            const filterArray = filter(promotion, (v: any) => {
                let result: any = true;
                criteria.forEach((key: string) => {
                    result = result && filterDataFieldWithCriteria(v[key], filterObj[key]);
                });
                return result;
            });
            return filterArray;
        } else {
            return promotion;
        }
    },
);

const PromotionPage: React.FC<PropsAccountType> = ({ AccountType }) => {
    const [form] = BaseForm.useForm();
    const { t } = useTranslation();
    const tableData = useAppSelector((state: any) => getTableData(state));
    const dispatch = useDispatch<AppDispatch>();
    const promotionState = useAppSelector((state) => state.promotion);
    console.log('render promno');

    useEffect(() => {
        dispatch(getDataPromotion({ app: promotionState.appState }));
    }, [promotionState.appState]);
    const actionMore = (record: Promotion) => {
        return (
            <Space align="center">
                <Button
                    disabled={record.usage}
                    type="default"
                    onClick={() => {
                        dispatch(setFormMode({ mode: 'edit', editData: record }));
                    }}
                >
                    {t('table.edit')}
                </Button>
                <Popconfirm
                    placement="topLeft"
                    title={t('action.delete_promotion')}
                    okText={t('table.yes')}
                    cancelText={t('table.no')}
                >
                    <Button type="default" danger>
                        {t('table.delete')}
                    </Button>
                </Popconfirm>
            </Space>
        );
    };

    const columns: ColumnsType<any> = [
        {
            title: t('table.creator'),
            dataIndex: 'creator',
            align: 'center',
            render: (text: string, record: Promotion) => <span>{record.creator}</span>,
        },
        {
            title: t('table.code'),
            dataIndex: 'code',
            align: 'center',
            render: (text: string, record: Promotion) => <span>{record.code}</span>,
        },
        {
            title: t('table.applied_product'),
            dataIndex: 'applied_product',
            align: 'center',
            render: (text: string, record: Promotion) => <span>{record.applied_product}</span>,
        },
        {
            title: t('table.active_email'),
            dataIndex: 'active_email',
            align: 'center',
            render: (text: string, record: Promotion) => <span>{record.active_email}</span>,
        },
        {
            title: t('table.active_day'),
            dataIndex: 'active_day',
            align: 'center',
            render: (text: string, record: Promotion) => {
                const date = new Date(record.active_day);
                return <span>{date.toISOString().slice(0, 10) + ' ' + date.toISOString().slice(11, 19)}</span>;
            },
        },
        {
            title: t('table.discount_amount'),
            dataIndex: 'discount_amount',
            align: 'center',
            render: (text: string, record: Promotion) => <span>{record.discount_amount}</span>,
        },
        {
            title: t('table.discount_type'),
            dataIndex: 'discount_type',
            align: 'center',
            render: (text: string, record: Promotion) => <span>{record.discount_type === 'percent' ? '%' : '$'}</span>,
        },
        {
            title: t('table.actions'),
            dataIndex: 'actions',
            align: 'center',
            render: (text: string, record: Promotion) => {
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
            <Tables
                columns={columns}
                tableData={tableData}
                breadcrumbData={{ page: 'promotion', type: AccountType }}
                editChildren={<AccountForm form={form} />}
                filter={<PromotionFilter />}
                rowKey={'code'}
                appState={promotionState.appState}
                setAppState={setAppstate}
            />
        </>
    );
};

export default PromotionPage;
