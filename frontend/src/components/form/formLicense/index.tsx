import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { TextArea } from '@app/components/common/Inputs/Input/Input';
import { Select } from '@app/components/common/Selects/Select/Select';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import AppList from '@app/config/apps.list.json';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { capitalize } from '@app/utils/utils';
import { DatePicker, FormInstance } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
interface Props {
    form: FormInstance<any>;
}

export const LicenseForm: React.FC<Props> = ({ form }) => {
    const { t } = useTranslation();
    const generalData = useAppSelector((state) => state.general);
    console.log('render form');

    const { RangePicker } = DatePicker;
    const handleSubmit = (value: any) => {
        console.log('input value', value);
    };
    useEffect(() => {
        form.resetFields();
    }, [generalData.formMode]);
    return (
        <BaseForm
            initialValues={
                generalData.formMode === 'edit' && generalData.editData
                    ? {
                          creator: generalData.editData.creator,
                          reason: generalData.editData.reason,
                          expire: generalData.editData.expired_day,
                          packages: generalData.editData.packages,
                      }
                    : undefined
            }
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark="optional"
        >
            <Form.FormItem name={'creator'} label={t('table.creator')}>
                <Form.FormInput placeholder="Creator" />
            </Form.FormItem>
            <Form.FormItem
                rules={[{ required: true, message: `${t('common.require_input')}` }]}
                name={'packages'}
                label={t('common.package')}
            >
                <Select
                    mode="multiple"
                    options={AppList.apps.map((value: string, index: number) => {
                        return { label: capitalize(value), value: value };
                    })}
                />
            </Form.FormItem>
            <Form.FormItem name={'expire'} label={t('table.period')}>
                <RangePicker format="YYYY-MM-DD" />
            </Form.FormItem>

            <Form.FormItem name={'reason'} label={t('table.reason')}>
                <TextArea rows={4} />
            </Form.FormItem>
        </BaseForm>
    );
};
