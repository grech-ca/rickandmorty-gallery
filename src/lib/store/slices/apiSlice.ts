import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'query-string';

import { Character, Paginated } from 'lib/types';

import { CharactersQueryParams } from './charactersQueryParamsSlice';

export const api = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: builder => ({
    getCharacters: builder.query<Paginated<Character>, CharactersQueryParams>({
      query: params => `character?${qs.stringify(params)}`,
    }),
    getCharacterById: builder.query<Character, number>({
      query: id => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;
