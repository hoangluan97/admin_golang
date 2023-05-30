import { setFormMode } from '@app/store/slices/generalSlice';
import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { Button } from '../common/Button/Button';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Select } from '../common/Selects/Select/Select';
import { useTranslation } from 'react-i18next';
import Applist from '@app/config/apps.list.json';
import { capitalize } from '@app/utils/utils';
import { AppDispatch } from '@app/store/store';
import { BreadcrumbData } from '@app/interfaces/common';

interface Props {
    breadcrumbData: BreadcrumbData;
    appState?: string;
    setAppState?: React.Dispatch<React.SetStateAction<string>>;
}

export const ExtraComponent: React.FC<Props> = ({ breadcrumbData, appState, setAppState }) => {
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();
    const content = () => {
        switch (breadcrumbData.page) {
            case 'setting':
                return (
                    <Button
                        icon={<PlusCircleOutlined />}
                        onClick={() => dispatch(setFormMode({ mode: 'create', editData: null }))}
                    >
                        {t('table.create')}
                    </Button>
                );
                break;
            case 'activity':
            case 'logger':
            case 'chart':
                return (
                    <Row gutter={[{ xxl: 16 }, { xxl: 16 }]}>
                        <Col style={{ marginRight: '10px' }}>
                            <Button
                                onClick={() => {
                                    dispatch(setFormMode({ mode: 'export', editData: null }));
                                }}
                                icon={<PlusCircleOutlined />}
                            >
                                {t('table.export')}
                            </Button>
                        </Col>

                        <Col>
                            <Select
                                width={'120px'}
                                value={appState}
                                onChange={(value: any) => {
                                    if (setAppState) setAppState(value);
                                }}
                                options={Applist.apps.map((app: string) => {
                                    return { label: capitalize(app), value: capitalize(app) };
                                })}
                            />
                        </Col>
                    </Row>
                );
                break;
            case 'request':
                return (
                    <Row gutter={[{ xxl: 16 }, { xxl: 16 }]}>
                        <Col>
                            <Select
                                width={'120px'}
                                value={appState}
                                onChange={(value: any) => {
                                    if (setAppState) setAppState(value);
                                }}
                                options={Applist.apps.map((app: string) => {
                                    return { label: capitalize(app), value: capitalize(app) };
                                })}
                            />
                        </Col>
                    </Row>
                );
            default:
                return (
                    <Row gutter={16} justify={{ xs: 'end' }}>
                        <Col>
                            <Button
                                onClick={() => {
                                    dispatch(setFormMode({ mode: 'export', editData: null }));
                                }}
                                icon={<PlusCircleOutlined />}
                            >
                                {t('table.export')}
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => {
                                    dispatch(setFormMode({ mode: 'create', editData: null }));
                                }}
                                icon={<PlusCircleOutlined />}
                            >
                                {t('table.create')}
                            </Button>
                        </Col>
                        <Col>
                            <Select
                                width={'120px'}
                                value={appState}
                                onChange={(value: any) => {
                                    if (setAppState) dispatch(setAppState(value));
                                }}
                                options={Applist.apps.map((app: string) => {
                                    return { label: capitalize(app), value: app };
                                })}
                            />
                        </Col>
                    </Row>
                );
        }
    };
    return <>{content()}</>;
};
