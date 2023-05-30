import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './EditLayout.styles';

const AuthLayout: React.FC = () => {
    return (
        <S.Wrapper>
            <Outlet />
        </S.Wrapper>
    );
};

export default AuthLayout;
