import type { JSX } from 'react';
import { Header } from './components/header/Header.js';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export function Layout(): JSX.Element {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Outlet />
      </Container>
    </>
  );
}
