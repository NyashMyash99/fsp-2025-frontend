import { type JSX } from 'react';
import { Stack } from '@mui/material';
import { LanguageSelect } from './LanguageSelect.js';
import { ThemeSelect } from './ThemeSelect.js';
import { Logo } from './LogoComponent.js';

export function Header(): JSX.Element {
  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      sx={{ padding: '32px 0px' }}
    >
      <Logo />

      <Stack direction="row" alignItems="center" gap="24px">
        <LanguageSelect /> <ThemeSelect />
      </Stack>
    </Stack>
  );
}
