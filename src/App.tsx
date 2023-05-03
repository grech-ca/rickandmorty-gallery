import { FC } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from 'setup/store';

import { theme } from 'setup/theme';
import { Routes } from 'Routes';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};
