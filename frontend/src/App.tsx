import { AppRouter } from './routes';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import React, { useEffect } from 'react';
import { themeObject } from './styles/themes/themeVariables';
import GlobalStyle from './styles/GlobalStyle';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 2*1000*60,
            refetchOnWindowFocus: false,
        }

    }

})


const App: React.FC = () => {
    const theme = 'dark';
    useThemeWatcher();

    return (
           <QueryClientProvider client={queryClient}>
            
            <meta name="theme-color" content={themeObject[theme].primary} />
            <GlobalStyle />
            <ConfigProvider locale={enUS}>
                <AppRouter />
            </ConfigProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
    );
};

export default App;
