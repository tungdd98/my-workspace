import React, { FC } from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps,
  Toolbar as MuiToolbar,
  ToolbarProps,
} from '@mui/material';

export const AppBar: FC<AppBarProps> = (props) => {
  return <MuiAppBar {...props} />;
};

export const Toolbar: FC<ToolbarProps> = (props) => {
  return <MuiToolbar {...props} />;
};
