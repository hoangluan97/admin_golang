import * as Edit from '@app/components/layouts/edit/EditLayout.styles';
import React from 'react';

interface Props {
    children?: JSX.Element;
}

export const EditForm: React.FC<Props> = ({ children }) => {
    return <Edit.FormWrapper>{children}</Edit.FormWrapper>;
};
