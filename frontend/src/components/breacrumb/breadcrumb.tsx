import { useAppSelector } from '@app/hooks/reduxHooks';
import { BreadcrumbData, CommonStore } from '@app/interfaces/common';
import { capitalize } from '@app/utils/utils';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from '../common/Breadcrumb/Breadcrumb';

interface Props {
    breadcrumbData: BreadcrumbData;
    appState?: string;
}

export const BreadcrumbComponent: React.FC<Props> = ({ breadcrumbData, appState }) => {
    const { t } = useTranslation();
    const generalState: CommonStore = useAppSelector((state) => state.general);

    const content = (): JSX.Element => {
        switch (breadcrumbData.page) {
            case 'setting':
                return (
                    <Breadcrumb>
                        <BreadcrumbItem>{capitalize(breadcrumbData.page)}</BreadcrumbItem>
                        <BreadcrumbItem>{t(`sidebar.${breadcrumbData.type?.toLowerCase()}`)}</BreadcrumbItem>
                    </Breadcrumb>
                );
            case 'request':
                return (
                    <Breadcrumb>
                        <BreadcrumbItem>{capitalize(breadcrumbData.page)}</BreadcrumbItem>
                    </Breadcrumb>
                );
            default:
                return (
                    <Breadcrumb>
                        <BreadcrumbItem>{capitalize(breadcrumbData.page)}</BreadcrumbItem>
                        <BreadcrumbItem>{t(`sidebar.${breadcrumbData.type?.toLowerCase()}`)}</BreadcrumbItem>
                        <BreadcrumbItem>{t(`apps.${appState?.toLowerCase()}`)}</BreadcrumbItem>
                    </Breadcrumb>
                );
        }
    };

    return <>{content()}</>;
};
