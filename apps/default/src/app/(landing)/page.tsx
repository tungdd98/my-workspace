import React, { FC } from 'react';
import {
  Chip,
  Container,
  InputAdornment,
  TextField,
} from '@my-workspace/ui-shared';
import { SearchIcon } from '@my-workspace/icons';
import ProductItem from './_components/ProductItem';
import { api } from '../../trpc/server';

const HomePage: FC = async () => {
  const restaurants = await api.common.getRestaurants.query();
  const categories = await api.common.getCategories.query();

  return (
    <Container sx={{ p: 4 }} maxWidth="sm">
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
      <div className="flex my-4 gap-1 overflow-x-auto no-scrollbar">
        {categories.map((item) => (
          <Chip
            key={item.id}
            label={item.displayName}
            sx={{
              borderRadius: '6px',
              bgcolor: 'grey.50',
              color: 'grey.700',
              fontSize: 14,
              fontWeight: 600,
            }}
          />
        ))}
      </div>
      {restaurants.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default HomePage;
