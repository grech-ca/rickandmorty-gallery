import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledGoBack = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.grey[900],
  opacity: 0.7,
  transition: '.2s ease',
  height: 'fit-content',

  '&:hover': {
    opacity: 1,

    [String(GoBackIcon)]: {
      transform: 'translateX(-8px)',
    },
  },
}));

export const GoBackText = styled(Typography)({
  fontSize: 20,
});

export const GoBackIcon = styled('svg')({
  transition: '.2s ease',
  width: 32,
  height: 32,
});
