import { createContext } from '@apps/default/trpc/server/context';
import { appRouter } from '@apps/default/trpc/server/routers/app';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () => await createContext(),
  });

export { handler as GET, handler as POST };
