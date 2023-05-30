import { BarChartOutlined, UserOutlined, ProfileOutlined, AuditOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';

export interface SidebarNavigationItem {
    title: string;
    key: string;
    permission?: string;
    url?: string;
    children?: SidebarNavigationItem[];
    icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
    {
        title: 'sidebar.overview',
        key: 'overview',
        url: '/overview',
        icon: <BarChartOutlined />,
    },
    {
        title: 'sidebar.account',
        key: 'account',
        icon: <UserOutlined />,
        children: [
            {
                title: 'sidebar.academic',
                key: 'accountacademic',
                permission: 'academic',
                url: '/account/academic',
            },
            {
                title: 'sidebar.enterprise',
                key: 'accountenterprise',
                permission: 'enterprise',

                url: '/account/enterprise',
            },
        ],
    },
    {
        title: 'sidebar.license',
        key: 'license',
        icon: <ProfileOutlined />,
        children: [
            {
                title: 'sidebar.academic',
                key: 'licenseacademic',
                permission: 'academic',
                url: '/license/academic',
            },
            {
                title: 'sidebar.enterprise',
                permission: 'enterprise',
                key: 'licenseenterprise',
                url: '/license/enterprise',
            },
        ],
    },
    {
        title: 'sidebar.promotion',
        key: 'promotion',
        icon: <ProfileOutlined />,
        children: [
            {
                title: 'sidebar.academic',
                key: 'promotionacademic',
                permission: 'academic',
                url: '/promotion/academic',
            },
            {
                title: 'sidebar.enterprise',
                permission: 'enterprise',
                key: 'promotionenterprise',
                url: '/promotion/enterprise',
            },
        ],
    },
    {
        title: 'sidebar.invoice',
        key: 'invoice',
        icon: <AuditOutlined />,
        children: [
            {
                title: 'sidebar.academic',
                key: 'invoiceacademic',
                permission: 'academic',
                url: '/invoice/academic',
            },
            {
                title: 'sidebar.enterprise',
                key: 'invoiceenterprise',
                permission: 'enterprise',
                url: '/invoice/enterprise',
            },
        ],
    },
    {
        title: 'sidebar.tracing',
        key: 'tracing',
        icon: <AuditOutlined />,
        children: [
            {
                title: 'sidebar.activity',
                key: 'activity',
                permission: 'tracing',
                url: '/tracing/activity',
            },
            {
                title: 'sidebar.logger',
                key: 'logger',
                permission: 'tracing',
                url: '/tracing/logger',
            },
        ],
    },
    {
        title: 'sidebar.request',
        key: 'request',
        url: '/request',
        permission: 'request',
        icon: <AuditOutlined />,
    },
    {
        title: 'sidebar.setting',
        key: 'setting',
        icon: <SettingOutlined />,
        children: [
            { title: 'sidebar.admin_account', key: 'adminAccount', url: '/setting/admin_account' },
            { title: 'sidebar.sso', key: 'sso', url: '/setting/sso' },
        ],
    },
];
