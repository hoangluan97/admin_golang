import { useEffect, useState } from 'react';
import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import { TextArea } from '@app/components/common/Inputs/Input/Input';
import { Switch } from '@app/components/common/Switch/Switch';
import { Divider, FormInstance } from 'antd';
import { Select } from '@app/components/common/Selects/Select/Select';
import { Space } from '@app/components/common/Inputs/SearchInput/SearchInput.styles';
import { formHelper } from './validator';
import UploadFileSc from './upload-file';
import UploadImage from './upload-icon';
import { providerSetting } from './options';
import image from '../../../assets/login/saml.png';
interface Props {
    form: FormInstance<any>;
    initialValue?: Record<string, any>;
}

const SamlProviderForm: React.FC<Props> = ({ form, initialValue }): JSX.Element => {
    const modeIDP = BaseForm.useWatch('_form_idp_mode', form);

    useEffect(() => {
        let tabMode = 'form';
        if (initialValue?.idp_issuer_url && initialValue?.idp_sso_url && initialValue?.idp_x509_public_cert) {
            // tab form
            tabMode = 'form';
        } else if (initialValue?.idp_xml_metadata) {
            // mode content
            tabMode = 'content';
        } else if (initialValue?.idp_metadata_url) {
            // mode url
            tabMode = 'url';
        } else {
            tabMode = 'form';
        }
        form.setFieldValue('_form_idp_mode', tabMode);
    }, [form, initialValue]);

    const formIDP: Record<string, any> = {
        form: (
            <>
                <Form.FormItem
                    rules={modeIDP === 'form' ? formHelper['idp_sso_url']?.rules ?? null : null}
                    hasFeedback
                    name="idp_sso_url"
                    label="IDP SSO URL"
                >
                    <Form.FormInput type="text" allowClear />
                </Form.FormItem>
                <Form.FormItem
                    rules={modeIDP === 'form' ? formHelper['idp_issuer_url']?.rules ?? null : null}
                    hasFeedback
                    name="idp_issuer_url"
                    label="IDP Issuer URL"
                >
                    <Form.FormInput type="text" allowClear />
                </Form.FormItem>
                <Form.FormItem
                    rules={modeIDP === 'form' ? formHelper['idp_x509_public_cert']?.rules ?? null : null}
                    hasFeedback
                    name="idp_x509_public_cert"
                    label="IDP x509 Public Cert"
                >
                    <TextArea bordered autoSize={{ minRows: 5, maxRows: 5 }} />
                </Form.FormItem>
            </>
        ),
        url: (
            <Form.FormItem
                rules={modeIDP === 'url' ? formHelper['idp_metadata_url']?.rules ?? null : null}
                hasFeedback
                name="idp_metadata_url"
                label="IDP Metadata URL"
            >
                <TextArea bordered autoSize={{ minRows: 8, maxRows: 8 }} />
            </Form.FormItem>
        ),
        content: (
            <Form.FormItem
                rules={modeIDP === 'content' ? formHelper['idp_xml_metadata']?.rules ?? null : null}
                hasFeedback
                name="idp_xml_metadata"
                label="IDP Metadata XML"
            >
                <TextArea bordered autoSize={{ minRows: 8, maxRows: 8 }} />
            </Form.FormItem>
        ),
    };

    return (
        <>
            <Form.FormItem name="display_icon" label="Display Icon">
                <UploadImage imageUrlDefault={image} />
            </Form.FormItem>

            <Divider orientation="left" orientationMargin="20px">
                <b style={{ fontSize: '0.8em' }}>IDP configuration</b>
            </Divider>

            <Form.FormItem shouldUpdate label="Configuration by" name="_form_idp_mode">
                <Select
                    style={{ width: '200px' }}
                    options={[
                        { value: 'form', label: 'Input Manual' },
                        { value: 'content', label: 'Read from XML Content' },
                        { value: 'url', label: 'Read from XML file URL' },
                    ]}
                />
            </Form.FormItem>
            <div style={{ minHeight: '200px' }}> {formIDP[modeIDP ?? 'form']}</div>

            <Divider orientation="left" orientationMargin="20px">
                <b style={{ fontSize: '0.8em' }}>SP configuration</b>
            </Divider>

            <Form.FormItem
                rules={formHelper['sp_x509_private_cert']?.rules ?? null}
                name="sp_x509_private_cert"
                label="SP x509 Private Cert"
                hasFeedback
            >
                <TextArea
                    bordered
                    // allowClear
                    autoSize={{ minRows: 5, maxRows: 5 }}
                />
            </Form.FormItem>
            <Space
                style={{
                    paddingLeft: '30px',
                    paddingBottom: '20px',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                <b> OR: </b>
                <UploadFileSc
                    callback={(v: string) => {
                        form.setFieldValue('sp_x509_private_cert', v);
                    }}
                />
            </Space>
            <Form.FormItem
                rules={formHelper['sp_x509_public_cert']?.rules ?? null}
                name="sp_x509_public_cert"
                label="SP x509 Public Cert"
                hasFeedback
            >
                <TextArea
                    placeholder={formHelper['sp_x509_public_cert']?.placeholder ?? null}
                    bordered
                    autoSize={{ minRows: 5, maxRows: 5 }}
                />
            </Form.FormItem>
            <Space
                style={{
                    paddingLeft: '30px',
                    paddingBottom: '20px',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                <b> OR: </b>
                <UploadFileSc
                    callback={(v: string) => {
                        form.setFieldValue('sp_x509_public_cert', v);
                    }}
                />
            </Space>

            <Form.FormItem name="enable_sign_authn_request" label="Enable Auth Request" valuePropName="checked">
                <Switch />
            </Form.FormItem>
        </>
    );
};

export default SamlProviderForm;
