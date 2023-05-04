import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CharacterGender, CharacterStatus } from 'lib/types';

export interface CharactersQueryParams {
  name: string;
  gender: CharacterGender | null;
  status: CharacterStatus | null;
  page: number;
}

const initialState: CharactersQueryParams = {
  gender: null,
  name: '',
  status: null,
  page: 1,
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
