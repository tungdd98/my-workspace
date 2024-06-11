'use client';

import React, { FC, useEffect, useState } from 'react';
import { Typography } from '@my-workspace/ui-shared';
import Link from 'next/link';
import { IRecipe } from '../types/common.types';
import { getAllRecipe } from '../libs/recipe';

const HomePage: FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllRecipe()
      .then((res) => setRecipes(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {recipes.map((item) => (
        <Link href={`/recipe/${item.id}`} key={item.id}>
          <Typography variant="body1">{item.title}</Typography>
        </Link>
      ))}
    </>
  );
};

export default HomePage;
