import styled from 'styled-components';
import { default as AntIcon } from '@ant-design/icons';
import { DashboardCard } from '@app/components/overview/DashboardCard/DashboardCard';
import { Text } from '../StatisticsInfo/StatisticsInfo.styles';

interface StatisticsProps {
  $color: string;
}

export const IconWrapper = styled.div`
  margin-top: 0.25rem;
`;

export const Icon = styled(AntIcon)`
  font-size: 1.5rem;
`;

export const StatisticCard = styled(DashboardCard)<StatisticsProps>`
  line-height: 1;
  overflow: hidden;

  ${Text} {
    color: ${(props) => `var(--${props.$color}-color)`};
  }
`;
