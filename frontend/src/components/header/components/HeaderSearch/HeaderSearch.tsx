import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Button } from '@app/components/common/Button/Button';
import { components as configComponents, Component } from '@app/constants/config/components';
import { categoriesList, CategoryType } from '@app/constants/categoriesList';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './HeaderSearch.styles';
import { Input } from '@app/components/common/Inputs/Input/Input.styles';

export interface CategoryComponents {
    category: CategoryType;
    components: Component[];
}

export const HeaderSearch: React.FC = () => {
    const { mobileOnly, isTablet } = useResponsive();

    const { pathname } = useLocation();

    const [query, setQuery] = useState('');
    const [components] = useState<Component[]>(configComponents);

    const [isModalVisible, setModalVisible] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const sortedResults = query
        ? categoriesList.reduce((acc, current) => {
              const searchResults = components.filter(
                  (component) =>
                      component.categories.includes(current.name) &&
                      component.keywords.some((keyword) => keyword.includes(query)),
              );

              return searchResults.length > 0 ? acc.concat({ category: current.name, components: searchResults }) : acc;
          }, [] as CategoryComponents[])
        : null;

    useEffect(() => {
        setModalVisible(false);
        setOverlayVisible(false);
    }, [pathname]);

    return (
        <>
            {mobileOnly && (
                <>
                    <Button
                        type={isModalVisible ? 'ghost' : 'text'}
                        icon={<S.SearchIcon onClick={() => setModalVisible(true)} />}
                    />
                    <S.SearchModal
                        open={isModalVisible}
                        closable={false}
                        footer={null}
                        onCancel={() => setModalVisible(false)}
                        destroyOnClose
                    >
                        <Input />
                    </S.SearchModal>
                </>
            )}
            {isTablet && <Input />}
        </>
    );
};
