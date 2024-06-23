'use client';

import React, { FC } from 'react';
import type { Category } from '@prisma/client';
import { Chip } from '@my-workspace/ui-shared';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '../../../../utils/create-query-string';

type FilterByCategoriesProps = {
  categories: Category[];
};

const FilterByCategories: FC<FilterByCategoriesProps> = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');

  return (
    <div className="flex my-4 gap-1 overflow-x-auto no-scrollbar">
      {categories.map((item) => (
        <Chip
          key={item.id}
          label={item.displayName}
          sx={{
            borderRadius: '6px',
            bgcolor: categoryId === item.id ? 'grey.300' : 'grey.50',
            color: 'grey.700',
            fontSize: 14,
            fontWeight: 600,
          }}
          onClick={() => {
            router.push(
              `${pathname}?${createQueryString(
                'category',
                item.id,
                searchParams
              )}`
            );
          }}
        />
      ))}
    </div>
  );
};

export default FilterByCategories;