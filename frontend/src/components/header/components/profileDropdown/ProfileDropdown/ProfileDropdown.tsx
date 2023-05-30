import React from 'react';
import { Avatar, Col, Row, MenuProps } from 'antd';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { H6 } from '@app/components/common/Typography/H6/H6';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';

export const ProfileDropdown: React.FC = () => {
    const { isTablet } = useResponsive();

    const user = useAppSelector((state) => state.user.data);
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <ProfileOverlay />,
        },
    ];
    return user && Object.keys(user).length ? (
        <Dropdown trigger={['click']} menu={{ items }}>
            <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
                <Col>
                    <Avatar src={user.imgUrl} alt="User" shape="circle" size={40} />
                </Col>
                {isTablet && (
                    <Col>
                        <H6>{`${user.firstName} ${user.lastName[0]}`}</H6>
                    </Col>
                )}
            </S.ProfileDropdownHeader>
        </Dropdown>
    ) : null;
};
