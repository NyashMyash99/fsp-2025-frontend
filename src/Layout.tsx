import type { JSX } from 'react';
import { Header } from './components/Header.js';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export function Layout(): JSX.Element {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
}
