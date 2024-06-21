import React, { FC } from 'react';
import {
  TextField as MuiTextField,
  SxProps,
  TextFieldProps,
  Theme,
  InputAdornmentProps,
  InputAdornment as MuiInputAdornment,
} from '@mui/material';
import merge from 'lodash.merge';

const useStylesTextField = (
  props: TextFieldProps
): SxProps<Theme> | undefined => {
  const { variant } = props;

  if (variant === 'filled') {
    return {
      backgroundColor: '#F9FAFB',
      borderRadius: 2,
      overflow: 'hidden',
      '& .MuiInputBase-root': {
        '&::before, &::after': {
          display: 'none',
        },
      },
      '& .MuiInputBase-input': {
        paddingBlock: 2,
      },
      '& .MuiInputAdornment-root': {
        marginTop: `0px !important`,
      },
    };
  }

  return undefined;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const classes = useStylesTextField(props);
  const { sx } = props;
  const customClasses = merge(sx, classes);

  return <MuiTextField sx={customClasses} {...props} />;
};

export const InputAdornment: FC<InputAdornmentProps> = (props) => {
  return <MuiInputAdornment {...props} />;
};
