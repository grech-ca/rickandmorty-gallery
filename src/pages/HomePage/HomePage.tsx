import { FC, Fragment } from 'react';

import Helmet from 'react-helmet';
import { motion } from 'framer-motion';

import { GalleryFilter } from 'components/character/GalleryFilter';
import { CharacterGallery } from 'components/character/CharacterGallery/CharacterGallery';

import { useAppSelector } from 'hooks/useSelector';
import { useDebounce } from 'hooks/useDebounce';

import { useGetCharactersQuery } from 'lib/store/slices/apiSlice';

export const HomePage: FC = () => {
  const { page, ...filter } = useAppSelector(state => state.charactersQueryParams);
  const debouncedFilter = useDebounce(filter, 200);

  const { data, isFetching, error } = useGetCharactersQuery({ page, ...debouncedFilter });

  return (
    <Fragment>
      <Helmet>
        <title>Rick and Morty Gallery</title>
      </Helmet>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          width: '100%',
          position: 'relative',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <GalleryFilter pages={(!error && data?.info.pages) || 0} />
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CharacterGallery characters={(!error && data?.results) || []} isLoading={isFetching} />
        </motion.div>
      </div>
    </Fragment>
  );
};
