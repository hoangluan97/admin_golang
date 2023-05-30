import React, { useEffect, useState } from 'react';
import { Header } from '../../../header/Header';
import MainSider from '../sider/MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useResponsive } from '@app/hooks/useResponsive';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';

const MainLayout: React.FC = () => {
    const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
    const [siderCollapsed, setSiderCollapsed] = useState(true);
    const userData = useAppSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (userData.data === null) {
            navigate('/login', { replace: true });
        }
    }, [userData.data]);
    const toggleSider = () => setSiderCollapsed(!siderCollapsed);

    return (
        <S.LayoutMaster>
            <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
            <S.LayoutMain>
                <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
                    <Header
                        toggleSider={toggleSider}
                        isSiderOpened={!siderCollapsed}
                        isTwoColumnsLayout={isTwoColumnsLayout}
                    />
                </MainHeader>
                <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
                    <div>
                        <Outlet />
                    </div>
                    {/* {!isTwoColumnsLayout && <References />} */}
                </MainContent>
            </S.LayoutMain>
        </S.LayoutMaster>
    );
};

export default MainLayout;
