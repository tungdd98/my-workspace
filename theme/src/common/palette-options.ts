import { PaletteOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Custom palette options
export const paletteOptionsLight: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1976d2',
    dark: '#004ba0',
    light: '#63a4ff',
    contrastText: '#fff',
  },
  secondary: {
    main: '#dc004e',
    dark: '#FF692E',
    light: '#ff5c8d',
    contrastText: '#fff',
  },
  info: {
    main: '#2196f3',
    dark: '#1769aa',
    light: '#4dabf5',
    contrastText: '#fff',
  },
  warning: {
    main: '#FDB022',
    dark: '#ba6c00',
    light: '#ffc947',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  success: {
    main: '#4caf50',
    dark: '#087f23',
    light: '#6abf69',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: red[500],
    dark: red[700],
    light: red[300],
    contrastText: '#fff',
  },
  grey: {
    50: '#F9FAFB',
    100: '#475467',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#98A2B3',
    500: '#667085',
    600: '#757575',
    700: '#344054',
    800: '#424242',
    900: '#212121',
  },
};

export const paletteOptionsDark: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1976d2',
    dark: '#004ba0',
    light: '#63a4ff',
    contrastText: '#fff',
  },
  secondary: {
    main: '#dc004e',
    dark: '#9a0036',
    light: '#ff5c8d',
    contrastText: '#fff',
  },
  info: {
    main: '#2196f3',
    dark: '#1769aa',
    light: '#4dabf5',
    contrastText: '#fff',
  },
  warning: {
    main: '#ff9800',
    dark: '#ba6c00',
    light: '#ffc947',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  success: {
    main: '#4caf50',
    dark: '#087f23',
    light: '#6abf69',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: red[500],
    dark: red[700],
    light: red[300],
    contrastText: '#fff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};
