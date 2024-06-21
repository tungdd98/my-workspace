'use client';

import { createTheme } from '@mui/material/styles';
import { getAppTheme } from './theme';

export const theme = createTheme(getAppTheme('light'));
