import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CHARACTER_GENDERS, CHARACTER_STATUSES, CharacterGender, CharacterStatus } from 'lib/types';

export interface CharactersQueryParams {
  name: string;
  gender: CharacterGender | null;
  status: CharacterStatus | null;
  page: number;
}
const params = new URL(document.location.href).searchParams;

const gender = params.get('gender') as CharacterGender;
const status = params.get('status') as CharacterStatus;
const name = params.get('name') ?? '';
const page = +(params.get('page') ?? 1);

const initialState: CharactersQueryParams = {
  gender: CHARACTER_GENDERS.includes(gender) ? gender : null,
  status: CHARACTER_STATUSES.includes(status) ? status : null,
  name,
  page,
};

const filterSlice = createSlice({
  name: 'charactersQueryParams',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<Omit<CharactersQueryParams, 'page'>>>) {
      return { ...state, page: 1, ...action.payload };
    },
    setPage(state, action: PayloadAction<number>) {
      return { ...state, page: action.payload };
    },
  },
});

const { actions, reducer } = filterSlice;

export const { setFilter, setPage } = actions;
export default reducer;
