import { Button } from '@app/components/common/Button/Button';
import { Select } from '@app/components/common/Selects/Select/Select';
import { useResponsive } from '@app/hooks/useResponsive';
import { Col, Form, Input, Row, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilterOutlined, CloseCircleOutlined } from '@ant-design/icons';
import AccountStageList from '@app/config/account.stage.json';
import { useForm } from 'antd/es/form/Form';
import { setFilterCreteria } from '@app/store/slices/invoiceSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/store/store';
import AppList from '@app/config/apps.list.json';
import { capitalize } from '@app/utils/utils';

export const InvoiceFilter: React.FC = () => {
    const { isTablet, isDesktop } = useResponsive();
    const { t } = useTranslation();
    const [form] = useForm();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (FormInput: any) => {
        dispatch(setFilterCreteria(FormInput));
    };
    const handleClearFilter = () => {
        dispatch(setFilterCreteria({}));
        form.resetFields();
    };
    return (
        <Form onFinish={handleSubmit} form={form}>
            <Row gutter={16}>
                <Col span={20}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item name={'name'}>
                                <Input placeholder={`${t('table.name')}`} />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item name={'packages'}>
                                <Select
                                    mode="multiple"
                                    placeholder={`${t('table.package')}`}
                                    options={AppList.apps.map((value) => {
                                        return { label: capitalize(value), value: value };
                                    })}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item name={'status'}>
                                <Select
                                    placeholder={`${t('table.status')}`}
                                    options={['paid', 'pending'].map((value) => {
                                        return { label: capitalize(value), value: value === 'paid' ? true : false };
                                    })}
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Tooltip title={`${t('tooltip.filter')}`}>
                                <Form.Item>
                                    <Button htmlType="submit" icon={<FilterOutlined />} />
                                </Form.Item>
                            </Tooltip>
                        </Col>
                        <Col span={2}>
                            <Tooltip title={`${t('tooltip.clear_filter')}`}>
                                <Form.Item>
                                    <Button onClick={handleClearFilter} icon={<CloseCircleOutlined />} />
                                </Form.Item>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};
