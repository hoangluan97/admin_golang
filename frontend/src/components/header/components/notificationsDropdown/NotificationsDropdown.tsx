import React, { useState } from 'react';
import { Avatar, Col, Row, MenuProps } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { Button } from '@app/components/common/Button/Button';
import { Badge } from '@app/components/common/Badge/Badge';
import { NotificationsOverlay } from '@app/components/header/components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';

export const NotificationsDropdown: React.FC = () => {
    const [isOpened, setOpened] = useState(false);
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <NotificationsOverlay />,
        },
    ];
    return (
        <Dropdown trigger={['click']} menu={{ items }} onOpenChange={setOpened}>
            <HeaderActionWrapper>
                <Button
                    type={isOpened ? 'ghost' : 'text'}
                    icon={
                        <Badge dot>
                            <BellOutlined />
                        </Badge>
                    }
                />
            </HeaderActionWrapper>
        </Dropdown>
    );
};
