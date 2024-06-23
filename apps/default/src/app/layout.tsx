import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { theme } from '@my-workspace/theme';
import './global.css';
import { FC } from 'react';
import { TRPCReactProvider } from '../trpc/Provider';

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme}>
            <CssBaseline />
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
