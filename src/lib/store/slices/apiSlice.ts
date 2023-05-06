import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'query-string';

import { Character, Paginated } from 'lib/types';

import { CharactersQueryParams } from './charactersQueryParamsSlice';
import { NormalizedCharacters } from 'lib/cache';

export const api = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: builder => ({
    getCharacters: builder.query<Paginated<Character>, CharactersQueryParams>({
      query: params => `character?${qs.stringify(params)}`,
      onQueryStarted: async (_arg, { queryFulfilled }) => {
        const { data } = await queryFulfilled;

        for (const character of data.results) {
          NormalizedCharacters.set(character.id, { ...character, name: 'zhopa' });
        }
      },
    }),
    getCharacterById: builder.query<Character, number>({
      query: id => `character/${id}`,
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        const character = NormalizedCharacters.get(id);

        if (character) {
          console.log(character);
          const patchResult = dispatch(
            api.util.updateQueryData(`getCharacterById`, id, draft => {
              console.log(draft);
              Object.assign(draft, { ...character, name: 'zhopa' });
            }),
          );

          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        }
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;
