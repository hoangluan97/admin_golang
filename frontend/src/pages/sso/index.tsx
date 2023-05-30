import { MoreOutlined } from '@ant-design/icons';
import { Popconfirm } from '@app/components/common/Popconfirm/Popconfirm';
import { Popover } from '@app/components/common/Popover/Popover';
import { Switch } from '@app/components/common/Switch/Switch';
import { SsoForm } from '@app/components/form/formSso';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { AuthProvider } from '@app/interfaces/sso';
import { setFormMode } from '@app/store/slices/generalSlice';
import { getDataSSO } from '@app/store/slices/ssoSlice';
import { AppDispatch } from '@app/store/store';
import { Space } from 'antd';
import { Button } from 'components/common/Button/Button';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { SsoFilter } from '@app/components/filter/sso';
import { createSelector } from '@reduxjs/toolkit';
import { filterDataFieldWithCriteria } from '@app/utils/utils';
import filter from 'lodash.filter';

const getTableData = createSelector([(state) => state.sso.data, (state) => state.sso.filter], (sso, filterObj) => {
    const criteria = Object.keys(filterObj);
    if (criteria.length > 0) {
        const filterArray = filter(sso, (v: any) => {
            let result: any = true;
            criteria.forEach((key: string) => {
                result = result && filterDataFieldWithCriteria(v[key], filterObj[key]);
            });
            return result;
        });
        return filterArray;
    } else {
        return sso;
    }
});

const SsoPage: React.FC = () => {
    const { t } = useTranslation();
    const tableData = useAppSelector((state) => getTableData(state));
    const generalData = useAppSelector((state) => state.general);
    const [form] = BaseForm.useForm();
    const dispatch = useDispatch<AppDispatch>();
    console.log('render sso');

    useEffect(() => {
        dispatch(getDataSSO());
    }, []);

    const actionMore = (record: AuthProvider) => {
        return (
            <>
                <Space direction="horizontal">
                    <Button
                        type="default"
                        onClick={() => {
                            dispatch(setFormMode({ mode: 'edit', editData: record }));
                        }}
                    >
                        {t('table.edit')}
                    </Button>

                    <Popconfirm
                        placement="bottomLeft"
                        title={`${t('confirm.sso_delete')}`}
                        onConfirm={() => {
                            console.log('delete');
                        }}
                        okText="Delete"
                        cancelText="Cancel"
                    >
                        <Button type="default" danger>
                            {t('table.delete')}
                        </Button>
                    </Popconfirm>
                </Space>
            </>
        );
    };

    const columns: any = [
        {
            title: 'App Name',
            dataIndex: 'app_name',
            key: 'app_name',
            align: 'center',
            width: '20%',
            isSearch: true,
            sortType: 'string',
            sortDirections: ['descend', 'ascend'],
            render: (value: any, record: any) => {
                return record.app_name;
            },
        },
        {
            title: 'Display Name',
            dataIndex: 'display_name',
            key: 'display_name',
            align: 'center',
            width: '20%',
            isSearch: true,
            sortType: 'string',
            sortDirections: ['descend', 'ascend'],
            render: (value: any, record: any) => {
                return record.display_name;
            },
        },
        {
            title: 'Protocol',
            dataIndex: 'protocol',
            key: 'protocol',
            align: 'center',
            width: '10%',
            isSearch: true,
            sortType: 'string',
            sortDirections: ['descend', 'ascend'],
            render: (value: any, record: any) => {
                return record.protocol;
            },
        },
        {
            title: 'Allow domains',
            dataIndex: 'allow_domains',
            key: 'allow_domains',
            align: 'center',
            width: '20%',
            isSearch: true,
            sortType: 'string',
            sortDirections: ['descend', 'ascend'],
            render: (value: any, record: any) => {
                return record.allow_domains;
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            width: '10%',
            isSearch: true,
            sortType: 'number',
            sortDirections: ['descend', 'ascend'],
            render: (value: any, record: any) => {
                return (
                    <Switch
                        checked={record.status > 0}
                        onChange={(v) => {
                            console.log('change');
                        }}
                    />
                );
            },
        },
        {
            title: 'Created at',
            dataIndex: 'created_at',
            key: 'created_at',
            align: 'center',
            width: '20%',
            sortType: 'number',
            sortDirections: ['descend', 'ascend'],
            render: (value: any, record: any) => {
                const date = new Date(1000 * record.created_at).toLocaleString();
                return <span>{date}</span>;
            },
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            width: '20%',
            render: (value: any, record: any) => {
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
                editChildren={<SsoForm form={form} />}
                type={'sso_config'}
                rowKey={'email'}
                modalSize={'80vw'}
                filter={<SsoFilter />}
            />
        </>
    );
};

export default SsoPage;
