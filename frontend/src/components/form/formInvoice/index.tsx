import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Select } from '@app/components/common/Selects/Select/Select';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import AppList from '@app/config/apps.list.json';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { getInvoiceEmailList } from '@app/store/slices/invoiceSlice';
import { capitalize } from '@app/utils/utils';
import { FormInstance, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    form: FormInstance<any>;
}

export const InvoiceForm: React.FC<Props> = ({ form }) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const generalData = useAppSelector((state) => state.general);
    const invoiceData = useAppSelector((state) => state.invoice);

    const handleSubmit = () => {
        console.log('submit');
    };
    useEffect(() => {
        form.resetFields();
    }, [generalData.formMode]);

    useEffect(() => {
        dispatch(getInvoiceEmailList());
    }, []);

    return (
        <>
            <BaseForm
                initialValues={
                    generalData.formMode === 'edit' && generalData.editData
                        ? {
                              name: generalData.editData.name,
                              email: generalData.editData.email,
                              package: generalData.editData.packages,
                              status: generalData.editData.status ? 'checked' : false,
                          }
                        : undefined
                }
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                requiredMark="optional"
            >
                <Form.FormItem
                    rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    name={'name'}
                    label={t('common.name')}
                >
                    <Form.FormInput placeholder="Name" />
                </Form.FormItem>

                <Form.FormItem
                    rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    name={'email'}
                    label={t('common.email')}
                >
                    <Select
                        mode="tags"
                        options={invoiceData.suggestEmail.map((per: string, index: number) => {
                            return { label: per, value: per };
                        })}
                    />
                </Form.FormItem>
                <Form.FormItem
                    rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    name={'package'}
                    label={t('common.package')}
                >
                    <Select
                        mode="multiple"
                        options={AppList.apps.map((value: string, index: number) => {
                            return { label: capitalize(value), value: value };
                        })}
                    />
                </Form.FormItem>
                <Form.FormItem
                    valuePropName="checked"
                    rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    name={'status'}
                    label={t('table.status')}
                >
                    <Switch />
                </Form.FormItem>
            </BaseForm>
        </>
    );
};
