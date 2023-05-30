import { Switch } from '@app/components/common/Switch/Switch';
import { FormInstance } from 'antd';

import TextArea from 'antd/es/input/TextArea';
import image from '../../../assets/login/openid.png';
import UploadImage from './upload-icon';
import { formHelper } from './validator';

import * as Form from '@app/components/layouts/edit/EditLayout.styles';
interface Props {
    form?: FormInstance<any>;
}

const OpenIDProviderForm: React.FC<Props> = ({ form }): JSX.Element => {
    return (
        <>
            <Form.FormItem name="display_icon" label="Display Icon">
                <UploadImage imageUrlDefault={image} />
            </Form.FormItem>

            <Form.FormItem
                name="authorization_url"
                label="Authorization URL"
                rules={formHelper['authorization_url']?.rules ?? null}
            >
                <Form.FormInput
                    type="text"
                    allowClear
                    placeholder={formHelper['authorization_url']?.placeholder ?? null}
                />
            </Form.FormItem>
            <Form.FormItem name="token_url" label="Token URL" rules={formHelper['token_url']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['token_url']?.placeholder ?? null} />
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
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    placeholder={formHelper['client_secret']?.placeholder ?? null}
                />
            </Form.FormItem>
            <Form.FormItem
                name="user_info_url"
                label="User Info URL"
                rules={formHelper['user_info_url']?.rules ?? null}
            >
                <Form.FormInput type="text" allowClear placeholder={formHelper['user_info_url']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="scope" label="Scope/Audience" rules={formHelper['Scope']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['scope']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="issuer_url" label="Issuer URL" rules={formHelper['issuer_url']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['issuer_url']?.placeholder ?? null} />
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
            <Form.FormItem name="enable_federation_mode" label="Enable Federation Mode" valuePropName="checked">
                <Switch defaultChecked />
            </Form.FormItem>
        </>
    );
};

export default OpenIDProviderForm;
