import { useTheme, useMediaQuery } from '@mui/material';

export const useIsMobile = (): boolean => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile;
};
