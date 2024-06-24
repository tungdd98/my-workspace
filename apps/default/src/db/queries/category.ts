import type { Category } from '@prisma/client';
import { db } from '../index';

export const getCategories = async (): Promise<Category[]> => {
  return await db.category.findMany({
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  });
};
