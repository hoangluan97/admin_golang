import React from 'react';
import { Modal as AntdModal, ModalProps as AntModalProps } from 'antd';
import { modalSizes } from 'constants/modalSizes';
import * as S from './Modal.styles';

export const { info: InfoModal, success: SuccessModal, warning: WarningModal, error: ErrorModal } = AntdModal;

interface ModalProps extends AntModalProps {
    size?: 'small' | 'medium' | 'large' | string;
}

export const Modal: React.FC<ModalProps> = ({ size, children, ...props }) => {
    return (
        <S.Modal getContainer={false} width={size ? size : modalSizes['medium']} {...props}>
            {children}
        </S.Modal>
    );
};
