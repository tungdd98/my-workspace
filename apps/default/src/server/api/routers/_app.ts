import { protectedProcedure, createTRPCRouter } from '../trpc';
import { getRestaurants } from '../../db/queries/restaurant';
import { getCategories } from '../../db/queries/category';
import { z } from 'zod';

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
});
