import { z } from 'zod';
import { protectedProcedure, createTRPCRouter } from '../trpc';

export const commonRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
