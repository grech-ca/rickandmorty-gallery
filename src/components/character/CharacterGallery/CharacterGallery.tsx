import { FC } from 'react';

import { Grid } from '@mui/material';

import { CharacterCard } from 'components/character/CharacterCard';

import { Character } from 'lib/types';

export interface CharacterGalleryProps {
  characters: Character[];
  isLoading: boolean;
}

export const CharacterGallery: FC<CharacterGalleryProps> = ({ characters, isLoading }) => {
  return (
    <Grid container spacing={1.5} alignContent="flex-start">
      {isLoading
        ? Array(20)
            .fill(null)
            .map((_null, key) => (
              <Grid item key={key} xs={6} sm={4} md={3}>
                <CharacterCard skeleton />
              </Grid>
            ))
        : characters.map(character => (
            <Grid item xs={6} sm={4} md={3} key={character.id}>
              <CharacterCard character={character} />
            </Grid>
          ))}
    </Grid>
  );
};
