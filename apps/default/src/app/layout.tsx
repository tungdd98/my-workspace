'use client';

import Header from '../components/Header';
import './global.css';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@my-workspace/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Header />
          <Container component="main">{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
