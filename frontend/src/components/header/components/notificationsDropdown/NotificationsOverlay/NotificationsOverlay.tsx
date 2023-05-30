import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './NotificationsOverlay.styles';

export const NotificationsOverlay: React.FC = ({ ...props }) => {
    const { t } = useTranslation();

    return (
        <S.NoticesOverlayMenu mode="inline" {...props}>
            <S.MenuRow gutter={[20, 20]}>
                <Col span={24}></Col>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={24}></Col>
                    </Row>
                </Col>
            </S.MenuRow>
        </S.NoticesOverlayMenu>
    );
};
