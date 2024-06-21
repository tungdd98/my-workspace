import { Components, Theme } from '@mui/material';

// Custom overrides
export const overrides: Components<Omit<Theme, 'components'>> = {
  MuiTextField: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.variant === 'filled' && {
          backgroundColor: '#F9FAFB',
          borderRadius: 8,
          overflow: 'hidden',
          '& .MuiInputBase-root': {
            '&::before, &::after': {
              display: 'none',
            },
          },
          '& .MuiInputBase-input': {
            paddingBlock: 8,
          },
          '& .MuiInputAdornment-root': {
            marginTop: `0px !important`,
          },
        }),
      }),
    },
  },
};
