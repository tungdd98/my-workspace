'use client';

import React, { FC, useEffect, useState } from 'react';
import NextImage, { ImageProps } from 'next/image';
import { Box } from '../Box';

const fallbackSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsqSmuBwAE0wHsenxwlQAAAABJRU5ErkJggg==';

export const Image: FC<ImageProps> = (props) => {
  const { src } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-flex', overflow: 'hidden' }}
    >
      <NextImage
        {...props}
        placeholder="blur"
        blurDataURL={fallbackSrc}
        src={imgSrc}
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) {
            setImgSrc(fallbackSrc);
          }
        }}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
        loading="lazy"
      />
    </Box>
  );
};
