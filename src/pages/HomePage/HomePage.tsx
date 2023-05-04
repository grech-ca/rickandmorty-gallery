import { FC, useState } from 'react';

import { Pagination, Paper, TextField, Checkbox, FormGroup, FormControlLabel, Typography } from '@mui/material';

import { CharacterCard } from 'components/character/CharacterCard';

import { useGetCharactersQuery } from 'lib/store/slices/apiSlice';

export const HomePage: FC = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetCharactersQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div
      style={{
        margin: '0 auto',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        gap: 20,
        width: '80%',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 20,
        }}
      >
        <Paper
          variant="outlined"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: 'fit-content',
            width: 400,
            marginBottom: 10,
            padding: 12,
          }}
        >
          <FormGroup>
            <TextField placeholder="Search" />
            <Typography>Gender</Typography>
            <FormControlLabel control={<Checkbox />} label="Genderless" />
            <FormControlLabel control={<Checkbox />} label="Male" />
            <FormControlLabel control={<Checkbox />} label="Female" />
            <FormControlLabel control={<Checkbox />} label="Unknown" />
            <Typography>Status</Typography>
            <FormControlLabel control={<Checkbox />} label="Alive" />
            <FormControlLabel control={<Checkbox />} label="Dead" />
            <FormControlLabel control={<Checkbox />} label="Unknown" />
          </FormGroup>
        </Paper>
        <Pagination
          page={page}
          onChange={(_event, page) => setPage(page)}
          count={data?.info.pages}
          variant="outlined"
          shape="rounded"
        />
      </div>
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
  );
};
