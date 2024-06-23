import type { Restaurant } from '@prisma/client';
import { db } from '../index';

export const getRestaurants = async (
  categoryId?: string,
  name?: string
): Promise<Restaurant[]> => {
  return await db.restaurant.findMany({
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
    where: {
      category: {
        id: categoryId,
      },
      name: {
        contains: name ? `%${name}%` : undefined,
      },
    },
  });
};
