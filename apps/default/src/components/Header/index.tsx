'use client';

import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import Link from 'next/link';
import { Typography } from '@my-workspace/ui-shared';
import { styled } from '@mui/material/styles';
import { MENUS } from '../../constants/header.constants';

const MenuLinkStyled = styled(Typography)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Header: FC = () => {
  return (
    <Box sx={{ mb: 5 }} component="header">
      <Container>
        <Box sx={{ display: 'flex', gap: 10, py: 4 }} component="nav">
          {MENUS.map((item) => (
            <Link href={item.href} key={item.label}>
              <MenuLinkStyled
                variant="subtitle1"
                sx={{ textTransform: 'uppercase', fontWeight: 700 }}
              >
                {item.label}
              </MenuLinkStyled>
            </Link>
          ))}
        </Box>
      </Container>
      <Box sx={{ bgcolor: 'warning.50', py: 3 }}>
        <Container sx={{ display: 'flex', gap: 6 }}>
          {['CATEGORIES', 'COLLECTIONS', 'RESOURCES'].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ fontWeight: 700, textTransform: 'uppercase' }}
            >
              {item}
            </Typography>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
