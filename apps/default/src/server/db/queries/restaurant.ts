import { db } from '../index';
import { TRestaurant } from '../../../types/restaurant/restaurant.types';

export const getRestaurants = async (
  categoryId?: string,
  name?: string
): Promise<TRestaurant[]> => {
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
    include: {
      featured: true,
    },
  });
};
