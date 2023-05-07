import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CharacterName = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  wordBreak: 'break-word',
  fontSize: 32,
  fontWeight: 500,
}));
