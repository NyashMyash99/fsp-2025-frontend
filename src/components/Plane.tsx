import { type JSX } from 'react';
import { type ThemeState, useThemeState } from '../stores/theme/theme.slice.js';

import planeGif from '../assets/gifs/plane.gif';
import planeDarkGif from '../assets/gifs/plane-dark.gif';

const icons: Record<ThemeState['theme'], string> = {
  LIGHT: planeGif,
  DARK: planeDarkGif,
};

export function Plane(): JSX.Element {
  const { theme } = useThemeState();

  return (
    <img
      src={icons[theme]}
      alt="plane"
      style={{
        position: 'absolute',
        left: '-20%',
        bottom: '-112%',
        zIndex: -1,
      }}
    />
  );
}
