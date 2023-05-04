import { configureStore } from '@reduxjs/toolkit';

import { api } from 'lib/store/slices/apiSlice';

import charactersQueryParamsReducer from './slices/charactersQueryParamsSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    charactersQueryParams: charactersQueryParamsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
