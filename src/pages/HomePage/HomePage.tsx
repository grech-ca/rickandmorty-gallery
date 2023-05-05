import { FC, Fragment } from 'react';

import Helmet from 'react-helmet';

import { GalleryFilter } from 'components/character/GalleryFilter';
import { CharacterGallery } from 'components/character/CharacterGallery/CharacterGallery';

import { useAppSelector } from 'hooks/useSelector';
import { useDebounce } from 'hooks/useDebounce';

import { useGetCharactersQuery } from 'lib/store/slices/apiSlice';

export const HomePage: FC = () => {
  const { page, ...filter } = useAppSelector(state => state.charactersQueryParams);
  const debouncedFilter = useDebounce(filter, 300);

  const { data, isFetching } = useGetCharactersQuery(
    { page, ...debouncedFilter },
    { refetchOnMountOrArgChange: true },
  );

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
        <GalleryFilter pages={data?.info.pages ?? 0} />
        <CharacterGallery characters={data?.results ?? []} isLoading={isFetching} />
      </div>
    </Fragment>
  );
};
