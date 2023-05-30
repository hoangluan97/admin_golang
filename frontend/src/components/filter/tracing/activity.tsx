import { Button } from '@app/components/common/Button/Button';
import { Select } from '@app/components/common/Selects/Select/Select';
import { useResponsive } from '@app/hooks/useResponsive';
import { Col, Form, Input, Row, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilterOutlined, CloseCircleOutlined } from '@ant-design/icons';
import AccountStageList from '@app/config/account.stage.json';
import { useForm } from 'antd/es/form/Form';
import { setDisplayModeActivity, setFilterCriteriaActivity } from '@app/store/slices/tracingSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@app/store/store';
import { PlusCircleOutlined } from '@ant-design/icons';
import { capitalize } from '@app/utils/utils';

export const ActivityFilter: React.FC = () => {
    const { isTablet, isDesktop } = useResponsive();
    const { t } = useTranslation();
    const [form] = useForm();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (FormInput: any) => {
        dispatch(setFilterCriteriaActivity(FormInput));
    };
    const handleClearFilter = () => {
        dispatch(setFilterCriteriaActivity({}));
        form.resetFields();
    };
    return (
        <Form onFinish={handleSubmit} form={form}>
            <Row justify={'space-between'} gutter={16} wrap>
                <Col lg={20} sm={{ span: 24 }}>
                    <Row justify={{ md: 'start', xs: 'space-between' }} gutter={8}>
                        <Col lg={6} sm={10}>
                            <Form.Item name={'name'}>
                                <Input placeholder={`${t('table.name')}`} />
                            </Form.Item>
                        </Col>
                        <Col lg={6} sm={10}>
                            <Form.Item name={'stage'}>
                                <Select
                                    placeholder={`${t('table.stage')}`}
                                    options={AccountStageList.stage.map((value) => {
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
                        <Col>
                            <Tooltip title={`${t('tooltip.clear_filter')}`}>
                                <Form.Item>
                                    <Button onClick={handleClearFilter} icon={<CloseCircleOutlined />} />
                                </Form.Item>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={6}>
                    <Row justify={{ md: 'end', xs: 'space-between' }} gutter={8}>
                        <Col span={12}>
                            <Button
                                onClick={() => {
                                    dispatch(setDisplayModeActivity('chart'));
                                }}
                            >
                                {t('table.chart')}
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                onClick={() => {
                                    dispatch(setDisplayModeActivity('table'));
                                }}
                            >
                                {t('table.table')}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};
