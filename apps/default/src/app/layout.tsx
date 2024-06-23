import { FC } from 'react';
import { TRPCReactProvider } from '../trpc/Provider';
import './global.css';

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
};

export default RootLayout;
