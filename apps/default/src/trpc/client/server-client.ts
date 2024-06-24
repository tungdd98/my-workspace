import { appRouter } from '../server/routers/app';
import { createCallerFactory } from '../server';
import { createContext } from '../server/context';

const createCaller = createCallerFactory(appRouter);

export const serverClient = createCaller(createContext());
