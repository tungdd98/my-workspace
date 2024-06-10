import React, { FC } from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(MuiButton)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    borderRadius: 0,
    fontWeight: 700,
    color: theme.palette.common.black,
    paddingInline: theme.spacing(3),
  },
}));

export const Button: FC<ButtonProps> = (props) => {
  return <ButtonStyled {...props} />;
};
