import { BreadcrumbComponent } from '@app/components/breacrumb/breadcrumb';
import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import { Modal } from '@app/components/common/Modal/Modal';
import { ExtraComponent } from '@app/components/extra/common';
import { EditForm } from '@app/components/form/formContainer/EditForm';
import { ExportForm } from '@app/components/form/formExport';
import * as Form from '@app/components/layouts/edit/EditLayout.styles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { BreadcrumbData, CommonStore } from '@app/interfaces/common';
import { FormInstance } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'components/common/Table/Table';
import React, { useRef } from 'react';
import { CSVLink } from 'react-csv';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import * as S from './page.styles';
import { setFormMode } from '@app/store/slices/generalSlice';

interface Props {
    columns: ColumnsType;
    tableData: any;
    rowKey: string;
    editChildren?: JSX.Element;
    filter?: JSX.Element;
    breadcrumbData: BreadcrumbData;
    modalSize?: 'small' | 'medium' | 'large' | string;
    appState?: 'bbrowser' | 'biocolab' | 'vinci' | 'all';
    setAppState?: React.Dispatch<React.SetStateAction<string>>;
    form?: FormInstance
}
export const Tables: React.FC<Props> = ({
    columns,
    tableData,
    breadcrumbData,
    editChildren,
    filter,
    rowKey,
    modalSize,
    appState,
    setAppState,
    form
}) => {
    const { t } = useTranslation();
    const generalState: CommonStore = useAppSelector((state) => state.general);
    const dispatch = useDispatch();
    // const [appState, setAppState] = useState('All');
    const componentRef = useRef<any>();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <S.Wrapper>
                <S.Card
                    id="basic-table"
                    title={<BreadcrumbComponent breadcrumbData={breadcrumbData} appState={appState} />}
                    padding="1.25rem 1.25rem 0"
                    extra={
                        <ExtraComponent breadcrumbData={breadcrumbData} appState={appState} setAppState={setAppState} />
                    }
                >
                    {filter ? filter : null}
                    <div ref={componentRef}>
                        <Table rowKey={rowKey} columns={columns} dataSource={tableData} scroll={{ x: 800 }} bordered />
                    </div>
                    <Modal
                        size={modalSize}
                        centered
                        title={t(`${generalState.formMode}.${breadcrumbData.page}`)}
                        open={generalState.formMode ? true : false}
                        getContainer={false}
                        footer={
                            <BaseForm.Item noStyle>
                                {generalState.formMode !== 'export' ? (
                                    <Form.SubmitButton onClick={() => form?.submit()} type="primary" htmlType="submit">
                                        {t('common.submit')}
                                    </Form.SubmitButton>
                                ) : (
                                    <Form.SubmitButton
                                        onClick={() => {
                                            if (form?.getFieldValue('type') === 'pdf') {
                                                handlePrint();
                                            }
                                        }}
                                    >
                                        {form?.getFieldValue('type') === 'csv' ? (
                                            <CSVLink data={tableData} filename={generalState.exportName}>
                                                {t('common.export')}
                                            </CSVLink>
                                        ) : (
                                            t('common.export')
                                        )}
                                    </Form.SubmitButton>
                                )}
                            </BaseForm.Item>
                        }
                        onCancel={() => dispatch(setFormMode({ mode: false, editData: null }))}
                    >
                        <EditForm>
                            {generalState.formMode !== 'export' ? editChildren : <ExportForm form={form} />}
                        </EditForm>
                    </Modal>
                </S.Card>
            </S.Wrapper>
        </>
    );
};
