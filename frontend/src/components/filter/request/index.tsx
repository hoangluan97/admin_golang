import { Button } from '@app/components/common/Button/Button';
import { Select } from '@app/components/common/Selects/Select/Select';
import { useResponsive } from '@app/hooks/useResponsive';
import { Col, Form, Input, Row, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilterOutlined, CloseCircleOutlined } from '@ant-design/icons';
import AccountStageList from '@app/config/account.stage.json';
import { useForm } from 'antd/es/form/Form';
import { setFilterCreteria } from '@app/store/slices/requestSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/store/store';
import RequestList from '@app/config/request.type.json';
import { capitalize } from '@app/utils/utils';

export const RequestFilter: React.FC = () => {
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
                            <Form.Item name={'email'}>
                                <Input placeholder={`${t('table.email')}`} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name={'company'}>
                                <Input placeholder={`${t('table.company')}`} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name={'request_type'}>
                                <Select
                                    allowClear={true}
                                    placeholder={`${t('table.request_type')}`}
                                    options={RequestList.type.map((value: string) => {
                                        return { label: capitalize(value), value: value };
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
