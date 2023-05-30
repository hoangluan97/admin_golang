import appList from '@app/config/apps.list.json';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import { useTranslation } from 'react-i18next';
import { Select } from '@app/components/common/Selects/Select/Select';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { setPermission } from '@app/store/slices/adminSlice';
interface Props {
    data: any;
    func: string;
}

export const TabContent: React.FC<Props> = ({ data, func }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    return (
        <>
            {func !== 'admin_account' ? (
                appList.apps.map((app, index) => (
                    <Form.FormItem key={index} name={`permission_${func}_${app}`} label={t(`apps.${app}`)}>
                        <Select
                            mode="multiple"
                            options={data[app as keyof typeof data].map((per: string) => {
                                return { label: per, value: per };
                            })}
                            onChange={(value: any) => {
                                let selectedPermission: Array<string> = [];
                                value.forEach((per: any) => {
                                    selectedPermission.push(per);
                                });
                                dispatch(setPermission({ selectedPermission, func, app }));
                            }}
                        />
                    </Form.FormItem>
                ))
            ) : (
                <Form.FormItem name={`permission_${func}`} label={t(`sidebar.admin_account`)}>
                    <Select
                        mode="multiple"
                        options={data.map((per: string) => {
                            return { label: per, value: per };
                        })}
                        onChange={(value: any) => {
                            let selectedPermission: Array<string> = [];
                            value.forEach((per: any) => {
                                selectedPermission.push(per);
                            });
                            dispatch(setPermission({ selectedPermission, func }));
                        }}
                    />
                </Form.FormItem>
            )}
        </>
    );
};
