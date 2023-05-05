import { FC } from 'react';

import { Card, CardContent, Skeleton } from '@mui/material';

import { CharacterImage } from './components/CharacterImage';

import { Character } from 'lib/types';

import { CharacterLinkWrapper, CharacterName } from './style';

export interface CharacterCardProps {
  character: Character;
  skeleton?: false;
}

export interface CharacterCardSkeletonProps extends Partial<Omit<CharacterCardProps, 'skeleton'>> {
  skeleton: true;
}

export const CharacterCard: FC<CharacterCardProps | CharacterCardSkeletonProps> = ({
  character,
  skeleton,
}) => {
  const card = (
    <Card variant="outlined">
      {skeleton ? (
        <Skeleton style={{ height: 150, width: '100%' }} variant="rectangular" />
      ) : (
        <CharacterImage
          src={character.image}
          style={{ height: 150, width: '100%' }}
          skeletonProps={{ variant: 'rectangular' }}
        />
      )}

      <CardContent>
        <CharacterName>{skeleton ? <Skeleton /> : character.name}</CharacterName>
      </CardContent>
    </Card>
  );

  if (skeleton) return card;

  return <CharacterLinkWrapper to={`/character/${character.id}`}>{card}</CharacterLinkWrapper>;
};
