import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Col, FormInstance, Row } from 'antd';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OAuth2ProviderForm from './form-oauth2';
import OAuth2CustomProviderForm from './form-oauth2-custom';
import OpenIDProviderForm from './form-openid';
import { DefaultFrom } from './form.default';
import SamlProviderForm from './form.saml';
import { extractSSOContent, trimSpaceValues } from './ssohelper';
import { createSSO, updateSSO } from '@app/store/slices/ssoSlice';
interface Props {
    form: FormInstance<any>;
}

export const SsoForm: React.FC<Props> = ({ form }) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const generalData = useAppSelector((state) => state.general);

    const [isLoading, setLoading] = useState(false);
    const type: string = BaseForm.useWatch('type', form);
    const protocol = BaseForm.useWatch('protocol', form);
    const handleSubmit = (value: any) => {
        const correctFormData = {
            ...trimSpaceValues(value),
        };

        const configContent = extractSSOContent(correctFormData);
        if (generalData.formMode === 'create') {
            const configToBeSent = {
                ...correctFormData,
                order: '',
                disable_ssl: correctFormData.disable_ssl ? 1 : 0,
                status: correctFormData.status ?? 1,
                content: JSON.stringify(configContent),
            };
            dispatch(createSSO(configToBeSent));
        } else if (generalData.formMode === 'edit') {
            const configToBeSent = {
                ...correctFormData,
                id: generalData.editData.id,
                order: '',
                disable_ssl: correctFormData.disable_ssl ? 1 : 0,
                status: correctFormData.status ?? 1,
                content: JSON.stringify(configContent),
            };
            dispatch(updateSSO(configToBeSent));
        }
        form.resetFields();
    };
    useEffect(() => {
        if (generalData.formMode === false) {
            form.resetFields();
        }
    }, [generalData.formMode]);

    useEffect(() => {
        if (generalData.editData) {
            form.setFieldsValue({
                ...generalData.editData,
                ...generalData.editData.content,
                disable_ssl: generalData.editData.disable_ssl ? 'checked' : false,
            });
        }
    }, [generalData.editData]);

    const childrenForm = (initialValue?: Record<string, any>) => {
        switch (protocol) {
            case 'OAUTH2':
                if (type && type.toLowerCase() == 'custom') {
                    return <OAuth2CustomProviderForm form={form} />;
                }
                return <OAuth2ProviderForm form={form} />;
            case 'SAML':
                return <SamlProviderForm form={form} initialValue={initialValue} />;
            case 'OPENID':
                return <OpenIDProviderForm form={form} />;

            default:
                return <SamlProviderForm form={form} initialValue={initialValue} />;
        }
    };
    const children = childrenForm(generalData.editData ? generalData.editData.content : null);

    return (
        <BaseForm
            initialValues={
                generalData.formMode === 'edit' && generalData.editData
                    ? {
                          ...generalData.editData,
                          ...generalData.editData.content,
                      }
                    : {
                          protocol: 'SAML',
                          type: 'Default',
                      }
            }
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark="optional"
            form={form}
        >
            <Row gutter={32}>
                <Col span={12}>
                    <DefaultFrom />
                </Col>
                <Col span={12}>{children} </Col>
            </Row>
        </BaseForm>
    );
};
