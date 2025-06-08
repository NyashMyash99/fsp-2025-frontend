import { createElement, type JSX } from 'react';
import type { ReactComponentLike } from 'prop-types';
import { type ThemeState, useThemeState } from '../stores/theme/theme.slice.js';
import { useActions } from '../hooks/actions.hook.js';
import SunIcon from '../assets/icons/theme/sun.svg?react';
import MoonIcon from '../assets/icons/theme/moon.svg?react';
import { SvgIcon } from '@mui/material';

export function ThemeSelect(): JSX.Element {
  const { theme } = useThemeState();
  const { changeTheme } = useActions();

  const icons: Record<ThemeState['theme'], ReactComponentLike> = {
    LIGHT: SunIcon,
    DARK: MoonIcon,
  };

  return (
    <SvgIcon
      color="primary"
      fontSize="large"
      cursor="pointer"
      onClick={() => changeTheme()}
    >
      {createElement(icons[theme])}
    </SvgIcon>
  );
}
