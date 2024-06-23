import React, { FC } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import BottomAppBar from './_components/BottomAppBar';
import { theme } from '@my-workspace/theme';

export const metadata = {
  title: 'Test: Seoul Comix',
  description: 'Coding Test Assignment: Full Stack Developer Challenge',
};

const LandingLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <CssVarsProvider theme={theme}>
        <div className="mb-16">
          {children}
          <BottomAppBar />
        </div>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
};

export default LandingLayout;
