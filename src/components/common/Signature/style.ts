import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSignature = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.grey[600],
  fontSize: 12,
  width: '100%',
}));
