import { updateFavoriteRestaurant } from '@apps/default/db/actions/restaurant';
import { getCategories } from '@apps/default/db/queries/category';
import { getRestaurants } from '@apps/default/db/queries/restaurant';
import { publicProcedure, router } from '../index';
import { z } from 'zod';

export const appRouter = router({
  getRestaurants: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        name: z.string().optional(),
      })
    )
    .query(async (opts) => {
      return await getRestaurants(opts.input.category, opts.input.name);
    }),
  getCategories: publicProcedure.query(async () => {
    return await getCategories();
  }),
  updateFavoriteRestaurant: publicProcedure
    .input(
      z.object({
        id: z.string(),
        isFavorite: z.boolean(),
      })
    )
    .mutation(async (opts) => {
      return await updateFavoriteRestaurant(
        opts.input.id,
        opts.input.isFavorite
      );
    }),
});

export type AppRouter = typeof appRouter;
