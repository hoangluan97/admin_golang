import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import { TextArea } from '@app/components/common/Inputs/Input/Input';
import { Switch } from '@app/components/common/Switch/Switch';
import { useTranslation } from 'react-i18next';
import ProtocolList from '@app/config/sso.protocol.json';
import { Select } from '@app/components/common/Selects/Select/Select';
import { AuthProvider } from '@app/interfaces/sso/provider';
import { FormInstance } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';

interface Props {
    editRecord?: AuthProvider | null;
    setEditRecord?: React.Dispatch<React.SetStateAction<AuthProvider | null>> | null;
    form?: FormInstance<any>;
    onFinish?: (values: any) => void;
}
export const DefaultFrom: React.FC<Props> = ({ editRecord, form, onFinish }): JSX.Element => {
    const { t } = useTranslation();
    const generalData = useAppSelector((state) => state.general);
    return (
        <>
            <Form.FormItem name={'protocol'} label={t('sso.protocol')}>
                <Select
                    disabled={generalData.formMode === 'edit' ? true : false}
                    options={ProtocolList.protocol.map((per: string, index: number) => {
                        return { label: per, value: per };
                    })}
                />
            </Form.FormItem>
            <Form.FormItem name={'app_name'} label={t('sso.app_name')}>
                <Form.FormInput allowClear placeholder={`${t('sso.app_name')}`} />
            </Form.FormItem>
            <Form.FormItem name={'allow_domains'} label={t('sso.allow_domains')}>
                <TextArea placeholder={`${t('sso.domain_example')}`} />
            </Form.FormItem>
            <Form.FormItem name={'type'} label={t('sso.type')}>
                <Select
                    disabled={generalData.formMode === 'edit' ? true : false}
                    options={Array(3)
                        .fill('type')
                        .map((per: string, index: number) => {
                            return { label: per + index, value: per + index };
                        })}
                />
            </Form.FormItem>
            <Form.FormItem name={'sub_type'} label={t('sso.sub_type')}>
                <Form.FormInput allowClear placeholder={`${t('sso.sub_type')}`} />
            </Form.FormItem>
            <Form.FormItem valuePropName="checked" name={'disable_ssl'} label={t('sso.disable_ssl')}>
                <Switch />
            </Form.FormItem>
        </>
    );
};
