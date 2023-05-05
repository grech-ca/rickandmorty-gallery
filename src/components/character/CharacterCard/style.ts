import { styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const CharacterName = styled(Typography)({
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
});

export const CharacterLinkWrapper = styled(Link)({
  textDecoration: 'none',
});
