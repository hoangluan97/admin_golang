import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Select } from '@app/components/common/Selects/Select/Select';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import AccountStage from '@app/config/account.stage.json';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { createAccountProxy, updateAccountProxy } from '@app/services/proxy';
import { capitalize } from '@app/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { FormInstance } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
interface Props {
    form: FormInstance<any>;
}

export const AccountForm: React.FC<Props> = ({form}) => {
    const { t } = useTranslation();
    const generalData = useAppSelector((state) => state.general);
    console.log(' submit form render');
    const createMutation = useMutation({
        mutationFn: (data) => {
          return createAccountProxy(data)
        },
      })
      const updateMutation = useMutation({
        mutationFn: (data) => {
          return updateAccountProxy(data)
        },
      })
    const handleSubmit = () => {
        console.log("form submit",form.getFieldsValue());
        if(generalData.formMode === 'edit') {
            updateMutation.mutate(form.getFieldsValue());
        } else {
            createMutation.mutate(form.getFieldsValue());
        }
    };
    useEffect(() => {
        if(generalData.formMode == false) {
            console.log("form",form.getFieldsValue());
            form.resetFields();
        }
    }, [generalData.formMode]);

    return (
        <BaseForm
            initialValues={
                generalData.formMode === 'edit' && generalData.editData
                    ? {
                          name: generalData.editData.name,
                          email: generalData.editData.email,
                          institution: generalData.editData.institution,
                          stage: generalData.editData.stage,
                      }
                    : undefined
            }
            layout="vertical"
            onFinish={() => handleSubmit()}
            requiredMark="optional"
            form={form}
        >
            <Form.FormItem
                rules={[{ required: true, message: `${t('form.name')}` }]}
                name={'name'}
                label={t('common.name')}
            >
                <Form.FormInput placeholder="Name" />
            </Form.FormItem>
            <Form.FormItem
                rules={[{ required: true, message: `${t('form.email')}` }]}
                name={'email'}
                label={t('common.email')}
            >
                <Form.FormInput placeholder="Email" />
            </Form.FormItem>
            <Form.FormItem
                rules={[{ required: true, message: `${t('form.institution')}` }]}
                name={'institution'}
                label={t('table.institution')}
            >
                <Form.FormInput placeholder="Name" />
            </Form.FormItem>
            <Form.FormItem
                rules={[{ required: true, message: `${t('form.stage')}` }]}
                name={'stage'}
                label={t('table.stage')}
            >
                <Select
                    options={AccountStage.stage.map((value: string, index: number) => {
                        return { label: capitalize(value), value: value };
                    })}
                />
            </Form.FormItem>
        </BaseForm>
    );
};
