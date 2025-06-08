import { type JSX, type PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import { ThemeMode } from '../../utils/types/enums/theme-mode.enum.js';
import { Theme } from '../../utils/constants/theme/theme.constants.js';
import { useThemeState } from '../../stores/theme/theme.slice.js';

export function ThemeContainer({ children }: PropsWithChildren): JSX.Element {
  const { theme } = useThemeState();

  return (
    <ThemeProvider theme={theme === ThemeMode.LIGHT ? Theme.LIGHT : Theme.DARK}>
      {children}
    </ThemeProvider>
  );
}
