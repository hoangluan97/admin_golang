import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Popconfirm } from '@app/components/common/Popconfirm/Popconfirm';
import { Status } from '@app/components/common/Status/Status';
import { LicenseFilter } from '@app/components/filter/license';
import { LicenseForm } from '@app/components/form/formLicense';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { PropsAccountType } from '@app/interfaces/common';
import { License } from '@app/interfaces/license';
import { setFormMode } from '@app/store/slices/generalSlice';
import { getDataLicense, setAppstate } from '@app/store/slices/licenseSlice';
import { AppDispatch } from '@app/store/store';
import { filterDataFieldWithCriteria } from '@app/utils/utils';
import { createSelector } from '@reduxjs/toolkit';
import { Col, Row, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/Button/Button';
import filter from 'lodash.filter';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const getTableData = createSelector(
    [(state) => state.license.data, (state) => state.license.filter],
    (license, filterObj) => {
        const criteria = Object.keys(filterObj);
        if (criteria.length > 0) {
            const filterArray = filter(license, (v: any) => {
                let result: any = true;
                criteria.forEach((key: string) => {
                    result = result && filterDataFieldWithCriteria(v[key], filterObj[key]);
                });
                return result;
            });
            return filterArray;
        } else {
            return license;
        }
    },
);

const LicensePage: React.FC<PropsAccountType> = ({ AccountType }) => {
    const { t } = useTranslation();
    const tableData = useAppSelector((state) => getTableData(state));
    const dispatch = useDispatch<AppDispatch>();
    const [form] = BaseForm.useForm();
    const licenseState = useAppSelector((state) => state.license);
    console.log('rendering license state');

    useEffect(() => {
        dispatch(getDataLicense({ app: licenseState.appState }));
    }, [licenseState.appState]);

    const columns: ColumnsType<any> = [
        {
            title: t('table.creator'),
            dataIndex: 'creator',
            align: 'center',
            render: (text: string, record: License) => <span>{record.creator}</span>,
        },
        {
            title: t('table.quoteid'),
            dataIndex: 'quoteid',
            align: 'center',
            render: (text: string, record: License) => <span>{record.quote_id}</span>,
        },
        {
            title: t('table.reason'),
            dataIndex: 'reason',
            align: 'center',
            render: (text: string, record: License) => <span>{record.reason}</span>,
        },
        {
            title: t('table.expire'),
            dataIndex: 'expire',
            align: 'center',
            render: (text: string, record: License) => {
                const date = new Date(record.expired_day);

                return <span>{date.toISOString().slice(0, 10) + ' ' + date.toISOString().slice(11, 19)}</span>;
            },
        },
        {
            title: t('table.packages'),
            dataIndex: 'packages',
            align: 'center',

            render: (text: string, record: License) => (
                <Row gutter={[10, 10]}>
                    {Array.isArray(record.packages) &&
                        record.packages.map((tag: string) => {
                            return (
                                <Col key={tag}>
                                    <Status color={'var(--info-color)'} text={tag} />
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
            width: '15%',
            render: (text: string, record: License) => {
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
                            title={t('action.delete_license')}
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
                breadcrumbData={{ page: 'license', type: AccountType }}
                editChildren={<LicenseForm form={form} />}
                rowKey={'quote_id'}
                filter={<LicenseFilter />}
                appState={licenseState.appState}
                setAppState={setAppstate}
            />
        </>
    );
};

export default LicensePage;
