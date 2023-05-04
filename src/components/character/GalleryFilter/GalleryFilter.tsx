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
  const { page } = useAppSelector(state => state.charactersQueryParams);
  const dispatch = useAppDispatch();

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  const updateFilter = (data: Partial<CharactersQueryParams>) => dispatch(setFilter(data));

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
          />
          <Typography>Gender</Typography>
          <RadioGroup
            defaultValue="All"
            onChange={(_event, gender) =>
              updateFilter({ gender: gender === 'All' ? null : (gender as CharacterGender) })
            }
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Genderless" control={<Radio />} label="Genderless" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
          </RadioGroup>
          <Typography>Status</Typography>
          <RadioGroup
            defaultValue="All"
            onChange={(_event, status) =>
              updateFilter({ status: status === 'All' ? null : (status as CharacterStatus) })
            }
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
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
