import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Select } from '@app/components/common/Selects/Select/Select';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import ExportType from '@app/config/export.type.json';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { setExportName, setExportType } from '@app/store/slices/generalSlice';
import { getInvoiceEmailList } from '@app/store/slices/invoiceSlice';
import { FormInstance } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    form: any;
}

export const ExportForm: React.FC<Props> = ({ form }) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const generalData = useAppSelector((state) => state.general);

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
            <BaseForm form={form} layout="vertical" onFinish={handleSubmit} requiredMark="optional">
                <Form.FormItem
                    rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    name={'name'}
                    label={t('common.name')}
                >
                    <Form.FormInput
                        onChange={(e) => {
                            dispatch(setExportName(e.target.value));
                        }}
                        placeholder="Name"
                    />
                </Form.FormItem>
                <Form.FormItem
                    rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    name={'type'}
                    label={t('common.type')}
                >
                    <Select
                        options={ExportType.type.map((value: string, index: number) => {
                            return { label: value, value: value };
                        })}
                        onChange={(value: any) => {
                            dispatch(setExportType(value));
                        }}
                        value={generalData.exportType}
                    />
                </Form.FormItem>
            </BaseForm>
        </>
    );
};
