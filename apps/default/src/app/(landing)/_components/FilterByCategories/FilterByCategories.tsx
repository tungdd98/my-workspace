'use client';

import React, { FC } from 'react';
import type { Category } from '@prisma/client';
import { Chip } from '@my-workspace/ui-shared';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '@apps/default/utils/create-query-string';

type FilterByCategoriesProps = {
  categories: Category[];
};

const FilterByCategories: FC<FilterByCategoriesProps> = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');

  const handleFilterByCategory = (item: Category) => {
    router.push(
      `${pathname}?${createQueryString(
        'category',
        item.id === categoryId ? '' : item.id,
        searchParams
      )}`
    );
  };

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
          onClick={() => handleFilterByCategory(item)}
        />
      ))}
    </div>
  );
};

export default FilterByCategories;
