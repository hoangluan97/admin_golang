import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { CommonStore } from '@app/interfaces/common';
import { setFormMode } from '@app/store/slices/generalSlice';
import { capitalize } from '@app/utils/utils';
import { Card } from 'components/common/Card/Card';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from '../common/Breadcrumb/Breadcrumb';
import { LineChart } from '../common/Charts/LineChart';
import { BaseForm } from '../common/Forms/BaseForm/BaseForm';
import { Modal } from '../common/Modal/Modal';
import { ExtraComponent } from '../extra/common';
import { EditForm } from '../form/formContainer/EditForm';
import { ExportForm } from '../form/formExport';

interface Props {
    type: string;
    filter?: JSX.Element;
}

export const Chart: React.FC<Props> = ({ filter, type }) => {
    const { t } = useTranslation();
    const generalState: CommonStore = useAppSelector((state) => state.general);
    const [appState, setAppState] = useState('All');

    const data = [
        { value: 1048, name: t('apps.bbrowser') },
        { value: 735, name: t('apps.biocolab') },
        { value: 580, name: t('apps.vinci') },
    ];
    const name = t('charts.visitorsFrom');
    const dispatch = useDispatch();
    const [form] = BaseForm.useForm();

    return (
        <Card
            padding="1.875rem"
            title={
                <Breadcrumb>
                    <BreadcrumbItem>{capitalize(generalState.location)}</BreadcrumbItem>
                    <BreadcrumbItem>{t(`sidebar.${generalState.type.toLowerCase()}`)}</BreadcrumbItem>
                </Breadcrumb>
            }
            extra={<ExtraComponent type={'chart'} appState={appState} setAppState={setAppState} />}
        >
            {filter ? filter : null}
            <LineChart name={name} showLegend={true} />
            <Modal
                size={'medium'}
                centered
                title={t(`${generalState.formMode}.${type}`)}
                open={generalState.formMode ? true : false}
                footer={
                    <BaseForm.Item noStyle>
                        <Form.SubmitButton onClick={() => form.submit()} type="primary" htmlType="submit">
                            {generalState.formMode !== 'export' ? t('common.submit') : t('common.export')}
                        </Form.SubmitButton>
                    </BaseForm.Item>
                }
                onCancel={() => dispatch(setFormMode({ mode: false, editData: null }))}
            >
                <EditForm>{<ExportForm form={form} />}</EditForm>
            </Modal>
        </Card>
    );
};
