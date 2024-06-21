import React, { FC } from 'react';
import { Box as MuiBox, BoxProps } from '@mui/material';

export const Box: FC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};
