import { useResponsive } from '@app/hooks/useResponsive';
import { AppDispatch } from '@app/store/store';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DesktopHeader } from './layouts/DesktopHeader';
import { MobileHeader } from './layouts/MobileHeader';

interface HeaderProps {
    toggleSider: () => void;
    isSiderOpened: boolean;
    isTwoColumnsLayout: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider, isSiderOpened, isTwoColumnsLayout }) => {
    const { isTablet } = useResponsive();

    return isTablet ? (
        <DesktopHeader isTwoColumnsLayout={isTwoColumnsLayout} />
    ) : (
        <MobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />
    );
};
