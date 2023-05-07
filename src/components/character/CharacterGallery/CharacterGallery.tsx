import { FC } from 'react';

import { Grid } from '@mui/material';

import { CharacterCard } from 'components/character/CharacterCard';

import { Character } from 'lib/types';

import { NoCharactersContainer, NoCharactersMessage } from './style';

export interface CharacterGalleryProps {
  characters: Character[];
  isLoading: boolean;
}

export const CharacterGallery: FC<CharacterGalleryProps> = ({ characters, isLoading }) => {
  if (characters.length === 0)
    return (
      <NoCharactersContainer>
        <NoCharactersMessage
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5 }}
        >
          No characters found
        </NoCharactersMessage>
      </NoCharactersContainer>
    );

  return (
    <Grid container spacing={1.5} alignContent="flex-start" flex={1} width="100%">
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
