import React, { FC } from 'react';
import {
  Chip,
  Container,
  InputAdornment,
  TextField,
} from '@my-workspace/ui-shared';
import { SearchIcon } from '@my-workspace/icons';
import { textByStoreCategory } from '../../constants/category/category.constants';
import { fakeData } from '../../constants/common/common';
import ProductItem from './_components/ProductItem';
import { api } from '../../trpc/server';

const HomePage: FC = async () => {
  const result = await api.common.hello.query({ text: 'my friend' });

  return (
    <Container sx={{ p: 4 }} maxWidth="sm">
      {result.greeting}
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
        {Object.entries(textByStoreCategory).map(([key, value]) => (
          <Chip
            key={key}
            label={value}
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
      {fakeData.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default HomePage;
