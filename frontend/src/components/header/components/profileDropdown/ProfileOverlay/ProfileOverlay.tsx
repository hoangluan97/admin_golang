import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './ProfileOverlay.styles';
import { DropdownMenu } from '@app/components/header/Header.styles';
import { useDispatch } from 'react-redux';
import { setUserData } from '@app/store/slices/userSlice';

export const ProfileOverlay: React.FC = ({ ...props }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <DropdownMenu selectable={false} {...props}>
            <>
                <S.MenuItem key={1}>
                    <S.Text>
                        <Link onClick={() => dispatch(setUserData(null))} to="/login">
                            {t('header.logout')}
                        </Link>
                    </S.Text>
                </S.MenuItem>
            </>
        </DropdownMenu>
    );
};
