import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Select } from '@app/components/common/Selects/Select/Select';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import PermissionList from '@app/config/admin.permission.json';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { createAccountAdmin } from '@app/store/slices/adminSlice';
import { AppDispatch } from '@app/store/store';
import { capitalize, createPermissionObject, getPermissionArrayFromObject } from '@app/utils/utils';
import { FormInstance } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

interface Props {
    form: FormInstance<any>;
}

export const AdminAccountForm: React.FC<Props> = ({ form }) => {
    const adminData = useAppSelector((state) => state.admin);
    const generalData = useAppSelector((state) => state.general);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const [isLoading, setLoading] = useState(false);
    const handleSubmit = (FormInput: any) => {
        const permissionObjectFromInput = createPermissionObject(adminData.permissionList);
        const correctInput = {
            name: FormInput.name,
            email: FormInput.email,
            password: FormInput.password,
            permissions: permissionObjectFromInput,
        };
        dispatch(createAccountAdmin(correctInput));
        form.resetFields();
    };
    useEffect(() => {
        form.resetFields();
    }, [generalData.formMode]);

    return (
        <BaseForm
            initialValues={
                generalData.formMode === 'edit' && generalData.editData
                    ? {
                          name: generalData.editData.name,
                          email: generalData.editData.email,
                          password: generalData.editData.password,
                          permission: getPermissionArrayFromObject(generalData.editData.permissions),
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
                <Form.FormInput placeholder="Email" />
            </Form.FormItem>
            <Form.FormItem
                rules={[{ required: true, message: `${t('common.require_input')}` }]}
                name={'password'}
                label={t('common.password')}
            >
                <Form.FormInput type="password" placeholder="Password" />
            </Form.FormItem>
            <Form.FormItem
                rules={[{ required: true, message: `${t('common.require_input')}` }]}
                name={'domain'}
                label={t('common.domain')}
            >
                <Select
                    mode="multiple"
                    options={Array(6)
                        .fill('Domain')
                        .map((value: string, index: number) => {
                            return { label: capitalize(value), value: value + index };
                        })}
                    onChange={(value: any) => {
                        const selectedPermission: Array<string> = [];
                        value.forEach((per: any) => {
                            selectedPermission.push(per);
                        });
                    }}
                />
            </Form.FormItem>
            <Form.FormItem
                rules={[{ required: true, message: `${t('common.require_input')}` }]}
                name={'permission'}
                label={t('common.permission')}
            >
                <Select
                    mode="multiple"
                    options={PermissionList.permissions.map((per: string) => {
                        return { label: `${t(`permission.${per}`)}`, value: per };
                    })}
                    onChange={(value: any) => {
                        const selectedPermission: Array<string> = [];
                        value.forEach((per: any) => {
                            selectedPermission.push(per);
                        });
                    }}
                />
            </Form.FormItem>
        </BaseForm>
    );
};
