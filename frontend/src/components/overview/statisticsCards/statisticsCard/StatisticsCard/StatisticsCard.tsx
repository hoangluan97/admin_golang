import { useResponsive } from '@app/hooks/useResponsive';
import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo';
import * as S from './StatisticsCard.styles';

interface StatisticsCardProps {
    name: string;
    value: number;
    prevValue: number;
    color: string;
    unit: string;
    Icon: JSX.Element;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ name, value, prevValue, color, unit, Icon }) => {
    const { isTablet: isTabletOrHigher } = useResponsive();

    const { t } = useTranslation();

    return (
        <S.StatisticCard padding="0.5rem" $color={color}>
            <Row wrap={false} gutter={[isTabletOrHigher ? 10 : 5, 0]}>
                <Col>
                    <S.IconWrapper>{Icon}</S.IconWrapper>
                </Col>

                <Col flex={1}>
                    <Row justify="space-between" align="middle" wrap={false}>
                        <Col>
                            <StatisticsInfo name={t(name)} value={value} prevValue={prevValue} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </S.StatisticCard>
    );
};
