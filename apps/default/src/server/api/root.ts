import { commonRouter } from './routers/_app';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  common: commonRouter,
});

export type AppRouter = typeof appRouter;
