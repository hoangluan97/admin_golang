import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { LineRaceChart } from '@app/components/charts/LineRaceChart/LineRaceChart';
import { StatisticsCards } from '@app/components/overview/statisticsCards/StatisticsCards';
const ChartsPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row gutter={[30, 30]}>
                <Col id="line-race" xs={24}>
                    <StatisticsCards />
                </Col>
                <Col id="line-race" xs={12}>
                    <LineRaceChart />
                </Col>

                <Col id="pie" xs={24} lg={12}></Col>
            </Row>
        </>
    );
};

export default ChartsPage;
