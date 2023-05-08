import { styled, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export const NoCharactersContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  minHeight: '35vh',
});

export const NoCharactersMessage = styled(motion(Typography))(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: 40,
  textAlign: 'center',
}));
