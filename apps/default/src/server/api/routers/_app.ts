import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import {
  getRestaurants,
  updateFavoriteRestaurant,
} from '../../db/queries/restaurant';
import { getCategories } from '../../db/queries/category';

export const commonRouter = createTRPCRouter({
  getRestaurants: protectedProcedure
    .input(
      z.object({
        category: z.string().optional(),
        name: z.string().optional(),
      })
    )
    .query(async (opts) => {
      return await getRestaurants(opts.input.category, opts.input.name);
    }),
  getCategories: protectedProcedure.query(async () => {
    return await getCategories();
  }),
  updateFavoriteRestaurant: protectedProcedure
    .input(
      z.object({
        isFavorite: z.boolean(),
      })
    )
    .query(async (opts) => {
      return await updateFavoriteRestaurant(opts.input.isFavorite);
    }),
});
