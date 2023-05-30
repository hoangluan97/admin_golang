import React from 'react';
import { Col, Row } from 'antd';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { HeaderFullscreen } from '../components/HeaderFullscreen/HeaderFullscreen';
import * as S from '../Header.styles';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';

interface DesktopHeaderProps {
    isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
    return (
        <Row justify="end" align="middle">
            <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
                <Row align="middle" justify="end" gutter={[10, 10]}>
                    <Col>
                        <Row gutter={[{ xxl: 10 }, { xxl: 10 }]}>
                            <Col>
                                <HeaderFullscreen />
                            </Col>
                            <Col>
                                <NotificationsDropdown />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <ProfileDropdown />
                    </Col>
                </Row>
            </S.ProfileColumn>
        </Row>
    );
};
