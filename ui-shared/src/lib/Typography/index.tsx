import React, { FC } from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';

export const Typography: FC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
