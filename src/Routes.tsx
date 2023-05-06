import { FC } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CharacterPage } from 'pages/CharacterPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';

import { Layout } from 'components/layout/Layout';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/character/:characterId" element={<CharacterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes as Routes };
