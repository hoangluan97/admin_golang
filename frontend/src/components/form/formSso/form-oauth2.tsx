import { Switch } from '@app/components/common/Switch/Switch';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import { FormInstance } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import image from '../../../assets/login/oauth2.png';
import UploadImage from './upload-icon';
import { formHelper } from './validator';

interface Props {
    form?: FormInstance<any>;
}

const OAuth2ProviderForm: React.FC<Props> = ({ form }): JSX.Element => {
    return (
        <>
            <Form.FormItem name="display_icon" label="Display Icon">
                <UploadImage imageUrlDefault={image} />
            </Form.FormItem>
            <Form.FormItem name="client_id" label="Client ID" rules={formHelper['client_id']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['client_id']?.placeholder ?? null} />
            </Form.FormItem>
            <Form.FormItem
                name="client_secret"
                label="Client Secret"
                rules={formHelper['client_secret']?.rules ?? null}
            >
                <TextArea
                    bordered
                    autoSize={{ minRows: 5, maxRows: 5 }}
                    placeholder={formHelper['client_secret']?.placeholder ?? null}
                />
            </Form.FormItem>
            <Form.FormItem name="scope" label="Scope/Audience" rules={formHelper['scope']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['scope']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="tenant_id" label="Tenant Id" rules={formHelper['tenant_id']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['tenant_id']?.placeholder ?? null} />
            </Form.FormItem>
            <Form.FormItem name="mp_scope" label="MP scope" rules={formHelper['mp_scope']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['mp_scope']?.placeholder ?? null} />
            </Form.FormItem>
            <Form.FormItem name="domain" label="Domain" rules={formHelper['domain']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['domain']?.placeholder ?? null} />
            </Form.FormItem>
            <Form.FormItem name="app_id" label="App ID" rules={formHelper['app_id']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['app_id']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="method" label="Method" rules={formHelper['method']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['method']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="sub_type" label="Subtype" rules={formHelper['sub_type']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['sub_type']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem
                name="silent_endpoint"
                label="Silent Endpoint"
                rules={formHelper['silent_endpoint']?.rules ?? null}
            >
                <Form.FormInput
                    type="text"
                    allowClear
                    placeholder={formHelper['silent_endpoint']?.placeholder ?? null}
                />
            </Form.FormItem>

            <Form.FormItem
                name="internal_endpoint"
                label="Internal Endpoint"
                rules={formHelper['internal_endpoint']?.rules ?? null}
            >
                <Form.FormInput
                    type="text"
                    allowClear
                    placeholder={formHelper['internal_endpoint']?.placeholder ?? null}
                />
            </Form.FormItem>

            <Form.FormItem name="mp_endpoint" label="MP endpoint" rules={formHelper['mp_endpoint']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['mp_endpoint']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="enabled" label="Enabled" valuePropName="checked">
                <Switch />
            </Form.FormItem>

            <Form.FormItem name="nonce" label="Nonce" rules={formHelper['nonce']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['nonce']?.placeholder ?? null} />
            </Form.FormItem>
            <Form.FormItem
                name="code_challenge"
                label="Code Challenge"
                rules={formHelper['code_challenge']?.rules ?? null}
            >
                <Form.FormInput
                    type="text"
                    allowClear
                    placeholder={formHelper['code_challenge']?.placeholder ?? null}
                />
            </Form.FormItem>
        </>
    );
};

export default OAuth2ProviderForm;
