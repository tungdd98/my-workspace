import { Featured, Restaurant } from '@prisma/client';

export type TRestaurant = Restaurant & {
  featured: Featured;
};
