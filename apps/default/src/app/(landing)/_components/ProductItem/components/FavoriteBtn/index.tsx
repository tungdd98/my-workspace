'use client';

import React, { FC, useEffect, useState } from 'react';
import { HeartIcon } from '@my-workspace/icons';
import { trpc } from '@apps/default/trpc/client/client';
import { TRestaurant } from '@apps/default/types/restaurant/restaurant.types';
import { cn } from '@apps/default/utils/merge-class';

type FavoriteBtnProps = {
  item: TRestaurant;
};

const FavoriteBtn: FC<FavoriteBtnProps> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(() => item.isFavorite);
  const { mutate, isLoading, isSuccess } =
    trpc.updateFavoriteRestaurant.useMutation();

  const handleUpdateFavorite = () => {
    if (isLoading) return;

    mutate({
      id: item.id,
      isFavorite: !item.isFavorite,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setIsFavorite((prev) => !prev);
    }
  }, [isSuccess]);

  return (
    <div
      className={cn(
        'absolute w-9 h-9 rounded-full top-2 right-2 flex justify-center items-center backdrop-blur cursor-pointer',
        isFavorite ? 'bg-error-dark' : 'bg-white/25'
      )}
      onClick={handleUpdateFavorite}
      aria-hidden="true"
    >
      <HeartIcon />
    </div>
  );
};

export default FavoriteBtn;
