import { FC, Fragment } from 'react';

import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Typography, Skeleton, Grid, Paper } from '@mui/material';

import { CharacterImage } from 'components/character/CharacterImage';
import { GoBack } from 'components/common/GoBack';

import { useGetCharacterByIdQuery } from 'lib/store/slices/apiSlice';

import { CharacterNotFoundPage } from './CharacterNotFoundPage';
import { CharacterName } from './style';

export const CharacterPage: FC = () => {
  const { characterId } = useParams();

  const { data: character, isLoading } = useGetCharacterByIdQuery(+characterId!);

  if (!isLoading && !character) return <CharacterNotFoundPage />;

  const { name, status, species, image, gender, type, origin, location } = character || {};

  const inlineSkeleton = <Skeleton style={{ display: 'inline-block', width: 100 }} />;

  return (
    <Fragment>
      <Helmet>{name && <title>{name} | Rick and Morty Gallery</title>}</Helmet>
      <Grid container spacing={3}>
        <Grid item xs={4} display="flex" justifyContent="flex-end">
          <GoBack fallbackPath="/">Back</GoBack>
        </Grid>
        <Grid item xs={4} display="flex" alignItems="center" flexDirection="column">
          <div style={{ width: '100%' }}>
            <Paper variant="outlined" style={{ overflow: 'hidden', marginBottom: 20 }}>
              <CharacterImage
                src={image}
                alt={name}
                style={{ height: '100%', width: '100%' }}
                wrapperStyle={{ height: 'auto', width: '100%', aspectRatio: '1/1' }}
                isLoading={isLoading}
              />
            </Paper>
            <div>
              <CharacterName>{isLoading ? inlineSkeleton : name}</CharacterName>
              <hr />
              <Typography>Status: {isLoading ? inlineSkeleton : status}</Typography>
              <Typography>Species: {isLoading ? inlineSkeleton : species}</Typography>
              <Typography>Gender: {isLoading ? inlineSkeleton : gender}</Typography>
              <Typography>Type: {isLoading ? inlineSkeleton : type}</Typography>
              <Typography>Origin: {isLoading ? inlineSkeleton : origin?.name}</Typography>
              <Typography>Location: {isLoading ? inlineSkeleton : location?.name}</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
