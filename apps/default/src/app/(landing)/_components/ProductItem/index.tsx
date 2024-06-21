import React, { FC } from 'react';
import { TProduct } from '../../../../types/product/product.types';
import { Box, Image, Typography } from '@my-workspace/ui-shared';
import styles from './styles.module.css';

type ProductItemProps = {
  item: TProduct;
};

const ProductItem: FC<ProductItemProps> = ({ item }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Image
        src={item.images[0]}
        width={398}
        height={223}
        alt={item.name}
        className={styles.image}
      />
      <Typography variant="caption" color="error.main">
        {item.featured.text}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {item.name}
      </Typography>
      <Typography variant="body2" color="grey.700">
        {item.desc}
      </Typography>
    </Box>
  );
};

export default ProductItem;
