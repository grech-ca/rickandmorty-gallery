import { FC, Fragment } from 'react';

import Helmet from 'react-helmet';

import { CharacterCard } from 'components/character/CharacterCard';
import { GalleryFilter } from 'components/character/GalleryFilter';

import { useAppSelector } from 'hooks/useSelector';
import { useDebounce } from 'hooks/useDebounce';

import { useGetCharactersQuery } from 'lib/store/slices/apiSlice';

export const HomePage: FC = () => {
  const { page, ...filter } = useAppSelector(state => state.charactersQueryParams);
  const debouncedFilter = useDebounce(filter, 300);

  const { data } = useGetCharactersQuery(
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
        {data && <GalleryFilter pages={data.info.pages} />}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 10,
          }}
        >
          {data?.results.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
