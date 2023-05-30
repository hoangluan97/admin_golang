import DataTablesPage from '@app/pages/account';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// no lazy loading for auth pages to avoid flickering

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import AdminAccountPage from '@app/pages/admin';
import InvoicePage from '@app/pages/invoice';
import LicensePage from '@app/pages/license';
import LoginPage from '@app/pages/login';
import ChartsPage from '@app/pages/overview';
import PromotionPage from '@app/pages/promotion';
import RequestPage from '@app/pages/request';
import SsoPage from '@app/pages/sso';
import ActivityPage from '@app/pages/tracing/activity';
import LoggerPage from '@app/pages/tracing/logger';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout />}>
                    <Route index element={<ChartsPage />} />
                    <Route path="overview" element={<ChartsPage />} />

                    <Route path="account">
                        <Route path="academic" element={<DataTablesPage AccountType="academic" />} />
                        <Route path="enterprise" element={<DataTablesPage AccountType="enterprise" />} />
                    </Route>
                    <Route path="license">
                        <Route path="academic" element={<LicensePage AccountType="academic" />} />
                        <Route path="enterprise" element={<LicensePage AccountType="enterprise" />} />
                    </Route>
                    <Route path="invoice">
                        <Route path="academic" element={<InvoicePage AccountType="academic" />} />
                        <Route path="enterprise" element={<InvoicePage AccountType="academic" />} />
                    </Route>
                    <Route path="setting">
                        <Route path="admin_account" element={<AdminAccountPage />} />
                        <Route path="sso" element={<SsoPage />} />
                    </Route>
                    <Route path="promotion">
                        <Route path="academic" element={<PromotionPage AccountType="academic" />} />
                        <Route path="enterprise" element={<PromotionPage AccountType="academic" />} />
                    </Route>
                    <Route path="tracing">
                        <Route path="activity" element={<ActivityPage />} />
                        <Route path="logger" element={<LoggerPage />} />
                    </Route>
                    <Route path="request" element={<RequestPage />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};
