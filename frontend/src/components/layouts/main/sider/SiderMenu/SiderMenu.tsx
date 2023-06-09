import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import * as S from './SiderMenu.styles';
import { sidebarNavigation, SidebarNavigationItem } from '../sidebarNavigation';
import { Menu } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { sidebarPermissionFilter } from '@app/utils/utils';
import { useDispatch } from 'react-redux';
interface SiderContentProps {
    setCollapsed: (isCollapsed: boolean) => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
    (result: SidebarNavigationItem[], current) =>
        result.concat(current.children && current.children.length > 0 ? current.children : current),
    [],
);

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const dispatch = useDispatch();
    const userData = useAppSelector((state) => state.user);
    const [sidebarData, setSidebarData] = useState<SidebarNavigationItem[] | null>(null);
    const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname);
    const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];
    const openedSubmenu = sidebarNavigation.find(({ children }) =>
        children?.some(({ url }) => url === location.pathname),
    );
    const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];
    useEffect(() => {
        if (userData.data) {
            const permissionSideBar = sidebarPermissionFilter(userData.data.permissions);
            setSidebarData(permissionSideBar);
        }
    }, [userData.data]);
    return (
        <S.Menu
            mode="inline"
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            onClick={() => setCollapsed(true)}
        >
            {sidebarData?.map((nav) =>
                nav.children && nav.children.length > 0 ? (
                    <Menu.SubMenu
                        key={nav.key}
                        title={t(nav.title)}
                        icon={nav.icon}
                        onTitleClick={() => setCollapsed(false)}
                        popupClassName="d-none"
                    >
                        {nav.children.map((childNav) => (
                            <Menu.Item key={childNav.key} title="">
                                <Link to={childNav.url || ''}>{t(childNav.title)}</Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                ) : (
                    <Menu.Item key={nav.key} title="" icon={nav.icon}>
                        <Link to={nav.url || ''}>{t(nav.title)}</Link>
                    </Menu.Item>
                ),
            )}
        </S.Menu>
    );
};

export default SiderMenu;
