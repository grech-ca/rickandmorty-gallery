import { FC, Fragment } from 'react';

import Helmet from 'react-helmet';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';

import { GalleryFilter } from 'components/character/GalleryFilter';
import { CharacterGallery } from 'components/character/CharacterGallery/CharacterGallery';

import { useAppSelector } from 'hooks/useSelector';
import { useDebounce } from 'hooks/useDebounce';

import { useGetCharactersQuery } from 'lib/store/slices/apiSlice';

export const HomePage: FC = () => {
  const { page, name, ...filter } = useAppSelector(state => state.charactersQueryParams);
  const debouncedName = useDebounce(name, 300);

  const { data, isFetching, error } = useGetCharactersQuery({
    page,
    name: debouncedName,
    ...filter,
  });

  return (
    <Fragment>
      <Helmet>
        <title>Rick and Morty Gallery</title>
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <GalleryFilter pages={(!error && data?.info.pages) || 0} />
        </Grid>
        <Grid item xs={8}>
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          >
            <CharacterGallery characters={(!error && data?.results) || []} isLoading={isFetching} />
          </motion.div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
