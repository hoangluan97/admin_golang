import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Popconfirm } from '@app/components/common/Popconfirm/Popconfirm';
import { Status } from '@app/components/common/Status/Status';
import { AccountFilter } from '@app/components/filter/account';
import { AccountForm } from '@app/components/form/formAccount';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Account, AccountStore } from '@app/interfaces/account';
import { PropsAccountType } from '@app/interfaces/common';
import { createAccountProxy, getAccountDataProxy } from '@app/services/proxy';
import { setAppState } from '@app/store/slices/accountSlice';
import { setFormMode } from '@app/store/slices/generalSlice';
import { AppDispatch } from '@app/store/store';
import { defineColorByPriority } from '@app/utils/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Form, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/Button/Button';
import filter from 'lodash.filter';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';


const AccountFilterMemo = React.memo(AccountFilter);

const DataTablesPage: React.FC<PropsAccountType> = ({ AccountType }) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();

    const accountState: AccountStore = useAppSelector((state) => state.account);
    const dispatch = useDispatch<AppDispatch>();
    
    const query = useQuery({ queryKey: ['account', accountState.appState], queryFn: () => getAccountDataProxy({ app: accountState.appState })})
    console.log('render account', query.data, accountState.appState);
   
    const visibleData = useMemo(
        () => {
            let filterObj = accountState.filter
            let account = query.data
            let checkFilterObj = Object.keys(filterObj).length
            if (Boolean(account) && checkFilterObj > 0) {
                return filter(account, filterObj);
            } else if(Boolean(account) && checkFilterObj == 0) {
                return account;
            } else {
                return []
            }
        },
        [accountState.filter, query.data]
      );

    const columns: ColumnsType<any> = [
        {
            title: t('table.institution'),
            dataIndex: 'institution',
            align: 'center',
            render: (text: string, record: Account) => <span>{record.institution}</span>,
        },
        {
            title: t('table.email'),
            dataIndex: 'email',
            align: 'center',
            render: (text: string, record: Account) => <span>{record.email}</span>,
        },
        {
            title: t('table.name'),
            dataIndex: 'name',
            align: 'center',
            render: (text: string, record: Account) => <span>{record.name}</span>,
        },
        {
            title: t('table.stage'),
            dataIndex: 'stage',
            align: 'center',
            render: (text: string, record: Account) => (
                <Status color={defineColorByPriority(record.stage)} text={record.stage.toUpperCase()} />
            ),
        },
        {
            title: t('table.history'),
            dataIndex: 'history',
            align: 'center',
            render: (text: string, record: Account) => <span>{record.history}</span>,
        },
        {
            title: t('table.actions'),
            dataIndex: 'actions',
            width: '15%',
            align: 'center',

            render: (text: string, record: Account) => {
                return (
                    <Space>
                        <Button
                            type="default"
                            onClick={() => {
                                dispatch(setFormMode({ mode: 'edit', editData: record }));
                            }}
                        >
                            {t('table.edit')}
                        </Button>
                        <Popconfirm
                            placement="topLeft"
                            title={t('action.delete_account')}
                            okText={t('table.yes')}
                            cancelText={t('table.no')}
                        >
                            <Button type="default" danger>
                                {t('table.delete')}
                            </Button>
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];
    return (
            <Tables
                columns={columns}
                tableData={visibleData}
                breadcrumbData={{ page: 'account', type: AccountType }}
                editChildren={<AccountForm form={form} />}
                filter={<AccountFilterMemo />}
                rowKey={'email'}
                appState={accountState.appState}
                setAppState={setAppState}
                form={form}
            />
    );
};

export default DataTablesPage;
