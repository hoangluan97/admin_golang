import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Popconfirm } from '@app/components/common/Popconfirm/Popconfirm.styles';
import { Status } from '@app/components/common/Status/Status';
import { AdminAccountFilter } from '@app/components/filter/adminAccount';
import { AdminAccountForm } from '@app/components/form/formAdminAccount';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { AdminAccount } from '@app/interfaces/admin';
import { getDataAdminAccount } from '@app/store/slices/adminSlice';
import { setFormMode } from '@app/store/slices/generalSlice';
import { AppDispatch } from '@app/store/store';
import { capitalize, filterDataFieldWithCriteria, getPermissionArrayFromObject } from '@app/utils/utils';
import { createSelector } from '@reduxjs/toolkit';
import { Col, Row, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/Button/Button';
import filter from 'lodash.filter';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const getTableData = createSelector(
    [(state) => state.admin.data, (state) => state.admin.filter],
    (admin, filterObj) => {
        const criteria = Object.keys(filterObj);
        if (criteria.length > 0) {
            const filterArray: any = filter(admin, (v: any) => {
                let result: any = true;
                criteria.forEach((key: string) => {
                    result = result && filterDataFieldWithCriteria(v[key], filterObj[key]);
                });
                return result;
            });
            return filterArray;
        } else {
            return admin;
        }
    },
);

const AdminAccountPage: React.FC = () => {
    const { t } = useTranslation();
    const tableData = useAppSelector((state) => getTableData(state));
    const [form] = BaseForm.useForm();
    const dispatch = useDispatch<AppDispatch>();
    console.log('render ad');

    useEffect(() => {
        console.log('call admin account');

        dispatch(getDataAdminAccount());
    }, []);

    const columns: ColumnsType<any> = [
        {
            title: t('table.name'),
            dataIndex: 'name',
            align: 'center',

            render: (text: string, record: AdminAccount) => <span>{record.name}</span>,
        },
        {
            title: t('table.email'),
            dataIndex: 'email',
            align: 'center',

            render: (text: string, record: AdminAccount) => <span>{record.email}</span>,
        },
        {
            title: t('table.permission'),
            dataIndex: 'permissions',
            align: 'center',

            render: (text: string, record: AdminAccount) => (
                <Row gutter={[10, 10]}>
                    {Boolean(record.permissions) &&
                        getPermissionArrayFromObject(record.permissions).map((tag: string) => {
                            return (
                                <Col key={tag}>
                                    <Status color={'var(--info-color)'} text={capitalize(tag)} />
                                </Col>
                            );
                        })}
                </Row>
            ),
        },
        {
            title: t('table.actions'),
            dataIndex: 'actions',
            align: 'center',
            render: (text: string, record: AdminAccount) => {
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
        <>
            <Tables
                columns={columns}
                tableData={tableData}
                editChildren={<AdminAccountForm form={form} />}
                breadcrumbData={{ page: 'setting', type: 'admin_account' }}
                rowKey={'email'}
                filter={<AdminAccountFilter />}
            />
        </>
    );
};

export default AdminAccountPage;
