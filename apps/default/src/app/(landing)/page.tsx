import React, { FC } from 'react';
import {
  Box,
  Chip,
  Container,
  InputAdornment,
  TextField,
} from '@my-workspace/ui-shared';
import { SearchIcon } from '@my-workspace/icons';
import { textByStoreCategory } from '../../constants/category/category.constants';
import { fakeData } from '../../constants/common/common';
import ProductItem from './_components/ProductItem';

const HomePage: FC = () => {
  return (
    <Container sx={{ p: 4 }}>
      <TextField
        variant="filled"
        size="small"
        placeholder="맛집 이름을 검색해보세요"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ display: 'flex', my: 4, gap: 2, overflowX: 'auto' }}>
        {Object.entries(textByStoreCategory).map(([key, value]) => (
          <Chip key={key} label={value} />
        ))}
      </Box>
      {fakeData.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default HomePage;
