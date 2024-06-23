import { protectedProcedure, createTRPCRouter } from '../trpc';
import { getRestaurants } from '../../db/queries/restaurant';
import { getCategories } from '../../db/queries/category';

export const commonRouter = createTRPCRouter({
  getRestaurants: protectedProcedure.query(async () => {
    return await getRestaurants();
  }),
  getCategories: protectedProcedure.query(async () => {
    return await getCategories();
  }),
});
