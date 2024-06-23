'use client';

import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { getAppTheme } from './theme';

export const theme = extendTheme(getAppTheme('light'));
