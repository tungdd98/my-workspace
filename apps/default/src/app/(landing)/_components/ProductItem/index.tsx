import React, { FC } from 'react';
import type { Restaurant } from '@prisma/client';
import { Image, Typography } from '@my-workspace/ui-shared';
import { HeartIcon, StarOnlyIcon, StarsIcon } from '@my-workspace/icons';

type ProductItemProps = {
  item: Restaurant;
};

const ProductItem: FC<ProductItemProps> = ({ item }) => {
  return (
    <div className="mb-4">
      <div className="relative mb-3">
        <Image
          src={item.images[0]}
          width={358}
          height={200}
          loading="lazy"
          alt={item.name}
          className="aspect-video rounded-2xl object-cover w-full h-auto"
        />
        <div className="absolute w-9 h-9 rounded-full bg-white/25 top-2 right-2 flex justify-center items-center backdrop-blur cursor-pointer">
          <HeartIcon />
        </div>
      </div>
      <Typography
        variant="caption"
        color="secondary.dark"
        className="flex gap-1 items-center mb-1"
        fontWeight={500}
      >
        <StarsIcon />
        {item.featuredText}
      </Typography>
      <div className="flex justify-between items-center gap-2 mb-1">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          className="line-clamp-1"
          color="grey.700"
        >
          {item.name}
        </Typography>
        <div className="flex items-center gap-1">
          <StarOnlyIcon />
          <Typography variant="body2">
            {Number(item.rating)}({Number(item.rating_count)})
          </Typography>
        </div>
      </div>
      <Typography
        variant="body2"
        color="grey.100"
        sx={{ mb: 1 }}
        className="line-clamp-1"
      >
        {item.desc}
      </Typography>
      <Typography variant="body2" color="grey.100">
        오사카 나카노시마 · 야키토리 · {item.price_range}만원
      </Typography>
    </div>
  );
};

export default ProductItem;
