import { FC } from 'react';

import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from 'lib/store';

import { theme } from 'lib/theme';
import { Routes } from 'Routes';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            'html, body, #root': {
              height: '100%',
              width: '100%',
            },
          }}
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};
