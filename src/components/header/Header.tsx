import { type JSX } from 'react';
import { Stack } from '@mui/material';
import { LanguageSelect } from './LanguageSelect.js';
import { ThemeSelect } from './ThemeSelect.js';
import { Logo } from './Logo.js';

export function Header(): JSX.Element {
  return (
    <Stack component="header" direction="row" justifyContent="space-between">
      <Logo />

      <Stack direction="row" alignItems="center" gap="16px">
        <LanguageSelect /> <ThemeSelect />
      </Stack>
    </Stack>
  );
}
