import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Popconfirm } from '@app/components/common/Popconfirm/Popconfirm';
import { Status } from '@app/components/common/Status/Status';
import { InvoiceFilter } from '@app/components/filter/invoice';
import { InvoiceForm } from '@app/components/form/formInvoice';
import { Tables } from '@app/components/tables/Tables/Tables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { PropsAccountType } from '@app/interfaces/common';
import { Invoice } from '@app/interfaces/invoice';
import { setFormMode } from '@app/store/slices/generalSlice';
import { getDataInvoice, setAppstate } from '@app/store/slices/invoiceSlice';
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
    [(state) => state.invoice.data, (state) => state.invoice.filter],
    (invoice, filterObj) => {
        const criteria = Object.keys(filterObj);
        if (criteria.length > 0) {
            const filterArray = filter(invoice, (v: any) => {
                let result: any = true;
                criteria.forEach((key: string) => {
                    result = result && filterDataFieldWithCriteria(v[key], filterObj[key]);
                });
                return result;
            });
            return filterArray;
        } else {
            return invoice;
        }
    },
);

const InvoicePage: React.FC<PropsAccountType> = ({ AccountType }) => {
    const { t } = useTranslation();
    const tableData = useAppSelector((state) => getTableData(state));
    const dispatch = useDispatch<AppDispatch>();
    const [form] = BaseForm.useForm();
    const invoiceState = useAppSelector((state) => state.invoice);
    console.log('render inc');

    useEffect(() => {
        dispatch(getDataInvoice({ app: invoiceState.appState }));
    }, [invoiceState.appState]);

    const columns: ColumnsType<any> = [
        {
            title: t('table.invoiceid'),
            dataIndex: 'invoiceid',
            align: 'center',

            render: (text: string, record: Invoice) => <span>{record.invoice_id}</span>,
        },
        {
            title: t('table.name'),
            dataIndex: 'name',
            align: 'center',

            render: (text: string, record: Invoice) => <span>{record.name}</span>,
        },
        {
            title: t('table.institution'),
            dataIndex: 'institution',
            align: 'center',

            render: (text: string, record: Invoice) => <span>{record.institution}</span>,
        },
        {
            title: t('table.packages'),
            dataIndex: 'packages',
            align: 'center',

            render: (text: string, record: Invoice) => (
                <Row gutter={[10, 10]}>
                    <>
                        {Array.isArray(record.packages) &&
                            record.packages.map((tag: string) => {
                                return (
                                    <Col key={tag}>
                                        <Status color={'var(--info-color)'} text={tag} />
                                    </Col>
                                );
                            })}
                    </>
                </Row>
            ),
        },
        {
            title: t('table.status'),
            dataIndex: 'status',
            align: 'center',

            render: (text: string, record: Invoice) => (
                <Status
                    color={record.status ? 'var(--success-color)' : 'var(--error-color)'}
                    text={record.status ? 'Paid' : 'Pending'}
                />
            ),
        },
        {
            title: t('table.actions'),
            dataIndex: 'actions',
            align: 'center',

            width: '15%',
            render: (text: string, record: Invoice) => {
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
                        <Button
                            type="default"
                            onClick={() => {
                                console.log('create');
                            }}
                        >
                            {t('create.license')}
                        </Button>
                        <Popconfirm
                            placement="topLeft"
                            title={t('action.delete_invoice')}
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
                breadcrumbData={{ page: 'invoice', type: AccountType }}
                editChildren={<InvoiceForm form={form} />}
                rowKey={'invoice_id'}
                filter={<InvoiceFilter />}
                appState={invoiceState.appState}
                setAppState={setAppstate}
            />
        </>
    );
};

export default InvoicePage;
