import React, { FC } from 'react';
import { Container, Typography } from '@my-workspace/ui-shared';
import ProductItem from './_components/ProductItem';
import FilterByCategories from './_components/FilterByCategories/FilterByCategories';
import FormSearch from './_components/FormSearch/FormSearch';
import { api } from '@apps/default/trpc/server';

type HomePageProps = {
  searchParams: {
    category?: string;
    name?: string;
  };
};

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  const restaurants = await api.common.getRestaurants.query({
    category: searchParams.category,
    name: searchParams.name,
  });
  const categories = await api.common.getCategories.query();

  return (
    <Container sx={{ p: 4 }} maxWidth="sm">
      <FormSearch />
      <FilterByCategories categories={categories} />
      {restaurants.length > 0 ? (
        restaurants.map((item) => <ProductItem key={item.id} item={item} />)
      ) : (
        <Typography variant="body2" textAlign="center">
          데이터 없음
        </Typography>
      )}
    </Container>
  );
};

export default HomePage;
