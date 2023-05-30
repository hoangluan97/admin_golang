import React, { useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'antd';
import { useResponsive } from 'hooks/useResponsive';
import { StatisticsCard } from './statisticsCard/StatisticsCard/StatisticsCard';
import { TagsOutlined } from '@ant-design/icons';
export const StatisticsCards: React.FC = () => {
    const [statistics, setStatistics] = useState([]);

    const { isTablet } = useResponsive();

    const statisticsCards = useMemo(
        () =>
            [
                {
                    id: 1,
                    name: 'study',
                    title: 'overview.study',
                    color: 'success',
                    value: 45,
                    prevValue: 30,
                    unit: 'kg',
                },
                {
                    id: 2,
                    name: 'fat',
                    title: 'overview.user',
                    color: 'error',
                    value: 45,
                    prevValue: 30,
                    unit: 'kg',
                },
                {
                    id: 3,
                    name: 'bones',
                    title: 'overview.account',
                    color: 'primary',
                    value: 45,
                    prevValue: 30,
                    unit: 'kg',
                },
            ].map((st, index) => {
                return (
                    <Col
                        key={st.id}
                        id={st.name}
                        xs={24}
                        md={index === statistics.length - 1 ? 0 : 8}
                        order={(isTablet && index + 1) || 0}
                    >
                        <StatisticsCard
                            name={st.title}
                            value={st.value}
                            prevValue={st.prevValue}
                            color={st.color}
                            unit={st.unit}
                            Icon={<TagsOutlined />}
                        />
                    </Col>
                );
            }),
        [statistics, isTablet],
    );

    return (
        <>
            <Row gutter={16}>{statisticsCards}</Row>
        </>
    );
};
