import { FC } from 'react';

import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <Container style={{ padding: 20 }}>
      <Outlet />
    </Container>
  );
};
