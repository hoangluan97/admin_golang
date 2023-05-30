import AccountStageList from '@app/config/account.stage.json';
import PermissionList from '@app/config/admin.permission.json';
import Functionlist from '@app/config/function.list.json';
import AppList from '@app/config/apps.list.json';
import every from 'lodash.every';

import { sidebarNavigation, SidebarNavigationItem } from '@app/components/layouts/main/sider/sidebarNavigation';
export const camelize = (string: string): string => {
    return string
        .split(' ')
        .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)))
        .join('');
};

export const capitalize = (word: string): string => {
    if (word) {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    } else return word;
};

export const normalizeProp = (prop: string | number | [number, number]): string =>
    typeof prop === 'number' ? `${prop}px` : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString();

export const shadeColor = (color: string, percent: number): string => {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(((R * (100 + percent)) / 100).toString());
    G = parseInt(((G * (100 + percent)) / 100).toString());
    B = parseInt(((B * (100 + percent)) / 100).toString());

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
    const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
    const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

    return '#' + RR + GG + BB;
};

export const hexToRGB = (hex: string): string => {
    if (hex) {
        const r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        return `${r}, ${g}, ${b}`;
    }
    return hex;
};

export const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (result) {
        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);
        (r /= 255), (g /= 255), (b /= 255);
        const max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        let h, s;
        const l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    h = 0;
            }
            h /= 6;
        }
        return {
            h,
            s,
            l,
        };
    } else {
        throw new Error('Non valid HEX color');
    }
};

export const formatNumberWithCommas = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export const msToH = (ms: number): number => Math.floor(ms / 3600000);

export const hToMS = (h: number): number => h * 3600000;

export const defineColorByPriority = (type: string): string => {
    switch (type.toLowerCase()) {
        case AccountStageList.stage[0]:
            return 'var(--primary-color)';
        case AccountStageList.stage[1]:
            return 'var(--success-color)';
        case AccountStageList.stage[2]:
            return 'var(--warning-color)';
        case AccountStageList.stage[3]:
            return 'var(--error-color)';
        default:
            return 'var(--success-color)';
    }
};

export const objectToArray = (objectInput: any, exceptKey: string) => {
    let permissionArray: Array<string> = [];
    const ObjectInputKeys = Object.keys(objectInput);
    ObjectInputKeys.forEach((func: any) => {
        if (func !== exceptKey) {
            const PermissionListFuncKeys = objectInput[func as keyof typeof objectInput];
            const PermissionListAppKeys = Object.keys(PermissionListFuncKeys);
            PermissionListAppKeys.forEach((app: string) => {
                permissionArray = permissionArray.concat(
                    PermissionListFuncKeys[app as keyof typeof PermissionListFuncKeys],
                );
            });
        } else {
            const PermissionListFuncKey: string[] = objectInput[exceptKey];
            permissionArray = permissionArray.concat(PermissionListFuncKey);
        }
    });
    return permissionArray;
};

export const arrayToObject = (array: Array<string>, boolean: boolean): object => {
    const resultObject: any = {};
    array.forEach((key: string, index: number) => {
        resultObject[key as keyof typeof resultObject] = boolean;
    });
    return resultObject;
};

export const getInitialPermissionForm = (permissions: any) => {
    const allowedPermissions: Array<string> = Object.keys(permissions);
    const initialPermissions: any = {};
    Functionlist.function.forEach((func: string) => {
        if (func !== 'admin_account') {
            AppList.apps.forEach((app: string) => {
                const formPermissionValue = allowedPermissions.filter((value: string) => {
                    return value.startsWith(func) && value.endsWith(app) && permissions[value] === true;
                });
                initialPermissions[`permission_${func}_${app}`] = formPermissionValue;
            });
        } else {
            const formPermissionValue = allowedPermissions.filter((value: string) => {
                return value.startsWith(func) && permissions[value] === true;
            });
            initialPermissions[`permission_${func}`] = formPermissionValue;
        }
    });
    console.log('Permission', initialPermissions);
    return initialPermissions;
};

export const createPermissionObject = (input: any) => {
    const permissionArrayFromPermissionList = objectToArray(PermissionList, 'admin_account');
    const permissionArrayFromInput = objectToArray(input, 'admin_account');
    const permissionObjectPrototype = arrayToObject(permissionArrayFromPermissionList, false);
    const permissionObjectFromInput = arrayToObject(permissionArrayFromInput, true);
    const resultObject = { ...permissionObjectPrototype, ...permissionObjectFromInput };
    return resultObject;
};

export const sidebarPermissionFilter = (userPermission: any): SidebarNavigationItem[] => {
    const permissionKeys = Object.keys(userPermission);
    const sidebarResult: SidebarNavigationItem[] = [];

    sidebarNavigation.forEach((sidebarItem) => {
        if (!permissionKeys.includes(sidebarItem.key)) {
            if (sidebarItem.children && sidebarItem.children.length) {
                const childrenPermission: SidebarNavigationItem[] = [];
                sidebarItem.children.forEach((child) => {
                    if (
                        child.permission &&
                        permissionKeys.includes(child.permission) &&
                        userPermission[child.permission]
                    ) {
                        childrenPermission.push(child);
                    }
                });
                sidebarItem.children = childrenPermission;
            }
            sidebarResult.push(sidebarItem);
        } else if (permissionKeys.includes(sidebarItem.key) && userPermission[sidebarItem.key]) {
            sidebarResult.push(sidebarItem);
        }
    });
    return sidebarResult;
};

export const filterValidObjectProps = (object: any) => {
    Object.keys(object).forEach((key: any) => {
        if (object[key] === undefined || object[key] === null) delete object[key];
    });
    return object;
};

export const getPermissionArrayFromObject = (obj: any) => {
    const keys = Object.keys(obj);
    const permissions = keys.filter((key: any) => {
        return obj[key] === true;
    });
    return permissions;
};

export const filterDataFieldWithCriteria = (dataField: any, criteria: any) => {
    if (Array.isArray(dataField)) {
        return criteria.every((value: any) => {
            return Boolean(
                dataField
                    .map((value: any) => {
                        return value.toLowerCase();
                    })
                    .includes(value.toLowerCase()),
            );
        });
    } else if (typeof dataField === 'string') {
        return dataField.toLowerCase().includes(criteria.toLowerCase());
    } else if (typeof dataField === 'boolean' || typeof dataField === 'number') {
        return Boolean(dataField === criteria);
    }
};
