import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import { BaseChart, BaseChartProps } from '@app/components/common/Charts/BaseChart';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';
import { BASE_COLORS } from '@app/styles/themes/constants';

interface PieChartProps extends BaseChartProps {
    option?: EChartsOption;
    // eslint-disable-next-line
    data?: any;
    name?: string;
    showLegend?: boolean;
}

export const LineChart: React.FC<PieChartProps> = ({ option, data, name, showLegend, ...props }) => {
    const defaultPieOption = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            show: showLegend,
            top: '0%',
            left: 16,
            textStyle: {
                color: themeObject['light'].textMain,
            },
        },
        dataset: {
            source: [
                ['day', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                ['first week', 820, 932, 901, 934, 1290, 1330, 1320],
                ['second week', 520, 1032, 801, 1334, 1290, 830, 1520],
            ],
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '15%' },
        series: [
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' },
            },
        ],
    };
    return (
        <>
            <BaseChart {...props} option={{ ...defaultPieOption, ...option }} />;
        </>
    );
};
