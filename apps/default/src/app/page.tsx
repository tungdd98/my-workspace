import React, { FC } from 'react';
import Link from 'next/link';
import { getAllRecipe } from '../libs/recipe';
import { Typography } from '@my-workspace/ui-shared';
import './global.css';

const HomePage: FC = async () => {
  const data = await getAllRecipe();

  return (
    <>
      {data.map((item) => (
        <Link href={`/recipe/${item.id}`} key={item.id}>
          <Typography>{item.title}</Typography>
        </Link>
      ))}
    </>
  );
};

export default HomePage;
