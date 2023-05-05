import { FC, ChangeEvent } from 'react';

import {
  Pagination,
  Paper,
  TextField,
  Radio,
  FormGroup,
  FormControlLabel,
  Typography,
  RadioGroup,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import qs from 'query-string';

import { useAppSelector } from 'hooks/useSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import {
  CharactersQueryParams,
  setFilter,
  setPage,
} from 'lib/store/slices/charactersQueryParamsSlice';

import { CharacterGender, CharacterStatus } from 'lib/types';

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
    <div
      style={{
        position: 'sticky',
        top: 20,
      }}
    >
      <Paper
        component="form"
        variant="outlined"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: 'fit-content',
          width: 350,
          marginBottom: 10,
          padding: 12,
        }}
      >
        <FormGroup>
          <TextField
            placeholder="Search"
            onChange={({ target: { value } }) => updateFilter({ name: value })}
            value={name}
          />
          <Typography>Gender</Typography>
          <RadioGroup
            defaultValue={gender ?? 'all'}
            onChange={(_event, gender) =>
              updateFilter({ gender: gender === 'all' ? null : (gender as CharacterGender) })
            }
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="genderless" control={<Radio />} label="Genderless" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
          </RadioGroup>
          <Typography>Status</Typography>
          <RadioGroup
            defaultValue={status ?? 'all'}
            onChange={(_event, status) =>
              updateFilter({ status: status === 'all' ? null : (status as CharacterStatus) })
            }
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="alive" control={<Radio />} label="Alive" />
            <FormControlLabel value="dead" control={<Radio />} label="Dead" />
            <FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
          </RadioGroup>
        </FormGroup>
      </Paper>
      <Pagination
        page={page ?? 1}
        onChange={handlePageChange}
        count={pages}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};
