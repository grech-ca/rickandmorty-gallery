import { FC } from 'react';

import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useIsMobile } from 'hooks/useIsMobile';

export const Layout: FC = () => {
  const isMobile = useIsMobile();

  return (
    <Container style={{ padding: isMobile ? 10 : 20 }}>
      <Outlet />
    </Container>
  );
};
