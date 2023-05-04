import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Character, Paginated } from 'lib/types';

export const api = createApi({
  reducerPath: 'starwarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: builder => ({
    getCharacters: builder.query<Paginated<Character>, number>({
      query: (page = 1) => `character?page=${page}`,
    }),
  }),
});

export const { useGetCharactersQuery } = api;
