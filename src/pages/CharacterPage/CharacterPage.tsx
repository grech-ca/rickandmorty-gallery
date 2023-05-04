import { FC, Fragment } from 'react';

import Helmet from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { Typography, Link as MuiLink } from '@mui/material';

import { useGetCharacterByIdQuery } from 'lib/store/slices/apiSlice';

export const CharacterPage: FC = () => {
  const { characterId } = useParams();

  const { data: character, isLoading } = useGetCharacterByIdQuery(+characterId!);

  if (isLoading) return <div>Loading</div>;

  if (!character) return <div>Not found</div>;

  const { name, status, species, image, gender, type, origin, location } = character;

  return (
    <Fragment>
      <Helmet>
        <title>{name} | Rick and Morty Gallery</title>
      </Helmet>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <MuiLink component={Link} to="/">
          Back to gallery
        </MuiLink>
        <img src={image} alt={name} />
        <div>
          <Typography>Name: {name}</Typography>
          <Typography>Status: {status}</Typography>
          <Typography>Species: {species}</Typography>
          <Typography>Gender: {gender}</Typography>
          <Typography>Type: {type}</Typography>
          <Typography>Origin: {origin.name}</Typography>
          <Typography>Location: {location.name}</Typography>
        </div>
      </div>
    </Fragment>
  );
};
