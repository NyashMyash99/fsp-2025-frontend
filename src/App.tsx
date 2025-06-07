import type { JSX } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.js';
import { ChatPage } from './pages/ChatPage.js';
import { CssBaseline } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Message } from './utils/types/enums/message.enum.js';
import { useTranslation } from 'react-i18next';

export function App(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      {/* Устанавливаем локализованный заголовок страницы */}
      <Helmet>
        <title>{t(Message.GLOBAL_TITLE)}</title>
      </Helmet>

      <CssBaseline />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChatPage />} />
          <Route path="*" element={<ChatPage />} />
        </Route>
      </Routes>
    </>
  );
}
