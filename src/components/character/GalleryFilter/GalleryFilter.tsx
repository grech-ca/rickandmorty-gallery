import { FC, ChangeEvent } from 'react';

import {
  Pagination,
  Paper,
  TextField,
  FormGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';

import { Signature } from 'components/common/Signature';

import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import {
  CharactersQueryParams,
  setFilter,
  setPage,
} from 'lib/store/slices/charactersQueryParamsSlice';

import { CharacterGender, CharacterStatus } from 'lib/types';

import { ReactComponent as Logo } from 'assets/logo.svg';

import { GalleryFilterWrapper } from './style';

export interface GalleryFilterProps {
  pages: number;
}

export const GalleryFilter: FC<GalleryFilterProps> = ({ pages }) => {
  const { page, status, name, gender } = useAppSelector(state => state.charactersQueryParams);
  const dispatch = useAppDispatch();

  const [, setSearchParams] = useSearchParams();

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setSearchParams(prev =>
      qs.stringify({ ...qs.parse(prev.toString()), page: String(page) }, { skipNull: true }),
    );
    dispatch(setPage(page));
  };

  const updateFilter = (data: Partial<CharactersQueryParams>) => {
    setSearchParams(prev =>
      qs.stringify(
        { ...qs.parse(prev.toString()), page: '1', ...data },
        { skipNull: true, skipEmptyString: true },
      ),
    );
    dispatch(setFilter(data));
  };

  return (
    <GalleryFilterWrapper>
      <Paper
        component="form"
        variant="outlined"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: 'fit-content',
          width: '100%',
          marginBottom: 10,
          padding: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            width: '100%',
            marginBottom: 20,
          }}
        >
          <Logo />
          <Typography style={{ marginLeft: 10, fontWeight: 700, fontSize: 18 }}>
            Rick and Morty Gallery
          </Typography>
        </div>
        <FormGroup style={{ width: '100%' }}>
          <TextField
            placeholder="Search"
            onChange={({ target: { value } }) => updateFilter({ name: value })}
            value={name}
            size="small"
            fullWidth
            autoFocus
            style={{ marginBottom: 20 }}
          />
          <FormControl fullWidth sx={{ marginY: 1 }}>
            <InputLabel id="gender-select">Gender</InputLabel>
            <Select
              id="gender-select"
              label="Gender"
              value={gender ?? 'all'}
              onChange={({ target: { value } }) =>
                updateFilter({ gender: value === 'all' ? null : (value as CharacterGender) })
              }
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="genderless">Genderless</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ marginY: 1 }}>
            <InputLabel id="status-select">Status</InputLabel>
            <Select
              id="status-select"
              label="Status"
              value={status ?? 'all'}
              onChange={({ target: { value } }) =>
                updateFilter({ status: value === 'all' ? null : (value as CharacterStatus) })
              }
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="alive">Alive</MenuItem>
              <MenuItem value="dead">Dead</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
        <Signature />
      </Paper>

      {pages > 1 && (
        <Pagination
          page={page ?? 1}
          onChange={handlePageChange}
          count={pages}
          variant="outlined"
          shape="rounded"
          style={{ alignSelf: 'center' }}
        />
      )}
    </GalleryFilterWrapper>
  );
};
