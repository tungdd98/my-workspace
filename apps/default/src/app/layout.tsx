import { FC } from 'react';
import './global.css';
import { Provider } from '../trpc/Provider';

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
