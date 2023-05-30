import { BaseForm } from '@app/components/common/Forms/BaseForm/BaseForm';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { getDataUser } from '@app/store/slices/userSlice';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@app/hooks/reduxHooks';

interface LoginFormData {
    email: string;
    password: string;
}

export const initValues: LoginFormData = {
    email: 'hello@altence.com',
    password: 'some-test-pass',
};

export const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const userData = useAppSelector((state) => state.user);

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (values: LoginFormData) => {
        dispatch(getDataUser());
    };
    useEffect(() => {
        if (userData.data !== null) {
            navigate('../', { replace: true });
        }
    }, [userData.data]);
    return (
        <Auth.Wrapper>
            <Auth.FormWrapper>
                <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
                    <Auth.FormTitle>{t('auth.login')}</Auth.FormTitle>
                    <Auth.FormItem
                        name="email"
                        label={t('common.email')}
                        rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    >
                        <Auth.FormInput placeholder={`${t('common.email')}`} />
                    </Auth.FormItem>
                    <Auth.FormItem
                        label={t('common.password')}
                        name="password"
                        rules={[{ required: true, message: `${t('common.require_input')}` }]}
                    >
                        <Auth.FormInputPassword placeholder={`${t('common.password')}`} />
                    </Auth.FormItem>
                    <BaseForm.Item noStyle>
                        <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
                            {t('auth.login')}
                        </Auth.SubmitButton>
                    </BaseForm.Item>
                </BaseForm>
            </Auth.FormWrapper>
        </Auth.Wrapper>
    );
};
