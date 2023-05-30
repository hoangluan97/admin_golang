import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import { FormInstance } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import image from '../../../assets/login/oauth2.png';

import UploadImage from './upload-icon';
import { formHelper } from './validator';

interface Props {
    form: FormInstance<any>;
}

const OAuth2CustomProviderForm: React.FC<Props> = ({ form }): JSX.Element => {
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
                    // allowClear
                    autoSize={{ minRows: 5, maxRows: 5 }}
                    placeholder={formHelper['client_secret']?.placeholder ?? null}
                />
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
            <Form.FormItem
                name="user_info_url"
                label="User Info URL"
                rules={formHelper['user_info_url']?.rules ?? null}
            >
                <Form.FormInput type="text" allowClear placeholder={formHelper['user_info_url']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="scope" label="Scope/Audience" rules={formHelper['scope']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['scope']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="method" label="Method" rules={formHelper['login_url']?.rules ?? null}>
                <Form.FormInput type="text" allowClear placeholder={formHelper['login_url']?.placeholder ?? null} />
            </Form.FormItem>

            <Form.FormItem name="extras" label="Extras" rules={formHelper['extras']?.rules ?? null}>
                <TextArea
                    bordered
                    // allowClear
                    autoSize={{ minRows: 5, maxRows: 5 }}
                    placeholder={formHelper['extras']?.placeholder ?? null}
                />
            </Form.FormItem>
            <Form.FormItem name="token_value" label="Token Value" rules={formHelper['token_value']?.rules ?? null}>
                <TextArea
                    bordered
                    // allowClear
                    autoSize={{ minRows: 5, maxRows: 5 }}
                    placeholder={formHelper['token_value']?.placeholder ?? null}
                />
            </Form.FormItem>
            <Form.FormItem name="token_key" label="Token Key" rules={formHelper['token_key']?.rules ?? null}>
                <TextArea
                    bordered
                    autoSize={{ minRows: 5, maxRows: 5 }}
                    placeholder={formHelper['token_key']?.placeholder ?? null}
                />
            </Form.FormItem>
        </>
    );
};

export default OAuth2CustomProviderForm;
