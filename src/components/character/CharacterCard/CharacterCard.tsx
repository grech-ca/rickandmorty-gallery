import { FC } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Character } from 'lib/types';

export interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character: { name, image } }) => {
  return (
    <Card variant="outlined">
      <CardMedia component="img" image={image} />
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};
