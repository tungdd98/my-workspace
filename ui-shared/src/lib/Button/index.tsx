import React, { FC } from 'react';
import {
  Button as MuiButton,
  ButtonProps,
  IconButton as MuiIconButton,
  IconButtonProps,
} from '@mui/material';

export const Button: FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};

export const IconButton: FC<IconButtonProps> = (props) => {
  return <MuiIconButton {...props} />;
};
