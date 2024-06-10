'use client';

import { Box, Breadcrumbs, Grid, Link as MuiLink } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@my-workspace/ui-shared';
import {
  AccessTimeOutlined,
  AddOutlined,
  NavigateNext,
  PrintOutlined,
} from '@mui/icons-material';
import Link from 'next/link';

const ImageStyled = styled(Image)(({ theme }) => ({
  maxWidth: '100%',
  objectFit: 'cover',
}));

const HomePage: FC = () => {
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ mb: 2 }}
      >
        <MuiLink
          underline="hover"
          key="1"
          color="inherit"
          href="/"
          component={Link}
        >
          RECIPES
        </MuiLink>
        <MuiLink
          underline="hover"
          key="2"
          color="inherit"
          href="/"
          component={Link}
        >
          BREAD
        </MuiLink>
        <Typography key="3" color="text.primary">
          QUICK BREAD
        </Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3" sx={{ mb: 10 }}>
            Whole-Grain Banana Bread
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium praesentium ea doloribus optio, recusandae consequuntur
            sed velit labore mollitia ut nesciunt? Impedit ab ipsam deserunt,
            numquam deleniti aut modi dolor.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 3,
              borderBottom: 1,
              pb: 3,
              borderBottomColor: 'grey.300',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 5 }}>
              <AccessTimeOutlined fontSize="large" />
              <div>
                <Typography fontWeight={700} variant="caption">
                  PREP
                </Typography>
                <Typography variant="body2" fontWeight={700}>
                  10 mins
                </Typography>
              </div>
            </Box>
            <Box sx={{ mr: 3 }}>
              <Typography fontWeight={700} variant="caption">
                BAKE
              </Typography>
              <Typography variant="body2" fontWeight={700}>
                1 hr to 1 hr 15 mins
              </Typography>
            </Box>
            <div>
              <Typography fontWeight={700} variant="caption">
                TOTAL
              </Typography>
              <Typography variant="body2" fontWeight={700}>
                1 hr 10 mins
              </Typography>
            </div>
          </Box>
          <Box sx={{ mt: 3, display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 3 }}>
              <AccessTimeOutlined fontSize="large" />
              <div>
                <Typography fontWeight={700} variant="caption">
                  YIELD
                </Typography>
                <Typography variant="body2" fontWeight={700}>
                  1 loaf, 12 generous servings
                </Typography>
              </div>
            </Box>
            <Button
              variant="outlined"
              startIcon={<AddOutlined fontSize="large" />}
              size="small"
              sx={{ mr: 2 }}
            >
              Save Recipe
            </Button>
            <Button
              variant="outlined"
              startIcon={<PrintOutlined fontSize="large" />}
              size="small"
            >
              Print
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <ImageStyled
            src="/images/cookies.jpeg"
            alt=""
            width={580}
            height={360}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
