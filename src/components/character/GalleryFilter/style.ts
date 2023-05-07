import { styled, Box } from '@mui/material';

export const GalleryFilterWrapper = styled(Box)(
  ({ theme }) => ({
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    top: theme.spacing(2.5),
  }),
  { component: 'aside' },
);
