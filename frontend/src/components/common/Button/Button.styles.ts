import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { Severity } from '@app/interfaces/common';

interface BtnProps {
    $severity?: Severity;
    $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    ${(props) =>
        props.$noStyle &&
        css`
            width: unset;
            padding: 0;
            height: 36px;
        `}

    &[disabled],
  &[disabled]:active,
  &[disabled]:focus,
  &[disabled]:hover {
        color: var(--disabled-color);
    }
`;
