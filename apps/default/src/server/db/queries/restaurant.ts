import type { Restaurant } from '@prisma/client';
import { db } from '../index';

export const getRestaurants = async (): Promise<Restaurant[]> => {
  return await db.restaurant.findMany({
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  });
};
