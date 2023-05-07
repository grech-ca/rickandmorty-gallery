import { FC, Fragment } from 'react';

import Helmet from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { Typography, Link as MuiLink, Skeleton } from '@mui/material';

import { CharacterImage } from 'components/character/CharacterImage';

import { useGetCharacterByIdQuery } from 'lib/store/slices/apiSlice';

import { CharacterNotFoundPage } from './CharacterNotFoundPage';

export const CharacterPage: FC = () => {
  const { characterId } = useParams();

  const { data: character, isLoading } = useGetCharacterByIdQuery(+characterId!);

  if (!isLoading && !character) return <CharacterNotFoundPage />;

  const { name, status, species, image, gender, type, origin, location } = character || {};

  const inlineSkeleton = <Skeleton style={{ display: 'inline-block', width: 100 }} />

  return (
    <Fragment>
      <Helmet>{name && <title>{name} | Rick and Morty Gallery</title>}</Helmet>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <MuiLink component={Link} to="/">
          Back to gallery
        </MuiLink>
        <CharacterImage
          src={image}
          alt={name}
          style={{ height: 300, width: 300, borderRadius: 4 }}
          isLoading={isLoading}
        />
        <div>
          <Typography>Name: {isLoading ? inlineSkeleton : name}</Typography>
          <Typography>Status: {isLoading ? inlineSkeleton : status}</Typography>
          <Typography>Species: {isLoading ? inlineSkeleton : species}</Typography>
          <Typography>Gender: {isLoading ? inlineSkeleton : gender}</Typography>
          <Typography>Type: {isLoading ? inlineSkeleton : type}</Typography>
          <Typography>Origin: {isLoading ? inlineSkeleton : origin?.name}</Typography>
          <Typography>Location: {isLoading ? inlineSkeleton : location?.name}</Typography>
        </div>
      </div>
    </Fragment>
  );
};
