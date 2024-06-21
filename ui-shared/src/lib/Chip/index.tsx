import React, { FC } from 'react';
import { Chip as MuiChip, ChipProps } from '@mui/material';

export const Chip: FC<ChipProps> = (props) => {
  return <MuiChip {...props} />;
};
