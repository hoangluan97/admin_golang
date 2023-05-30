// import { WithChildrenProps } from '@app/types/generalTypes';
import React from 'react';
import * as S from './MainHeader.styles';

// interface MainHeaderProps extends WithChildrenProps {
//   isTwoColumnsLayout: boolean;
// }

export const MainHeader: React.FC<any> = ({ isTwoColumnsLayout, children }) => {
    return <S.Header $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>{children}</S.Header>;
};
