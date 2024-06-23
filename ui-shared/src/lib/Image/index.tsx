'use client';

import React, { FC, useEffect, useState } from 'react';
import NextImage, { ImageProps } from 'next/image';

const fallbackSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsqSmuBwAE0wHsenxwlQAAAABJRU5ErkJggg==';

export const Image: FC<ImageProps> = (props) => {
  const { src } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <NextImage
      {...props}
      placeholder="blur"
      blurDataURL={fallbackSrc}
      src={imgSrc}
      onError={() => {
        setImgSrc('/images/no-image.png');
      }}
    />
  );
};
