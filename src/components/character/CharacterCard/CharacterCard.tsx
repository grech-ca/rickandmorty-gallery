import { FC } from 'react';

import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Character } from 'lib/types';

export interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character: { name, image, id } }) => {
  return (
    <Card variant="outlined" component={Link} to={`/character/${id}`}>
      <CardMedia component="img" image={image} />
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};
