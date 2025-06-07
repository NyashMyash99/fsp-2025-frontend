import {
  createTheme,
  type Theme as MUITheme,
  type ThemeOptions,
} from '@mui/material';
import {
  BACKGROUND_COLOR,
  BACKGROUND_DARK_COLOR,
  PRIMARY_COLOR,
} from '../color.constants.js';
import { ThemeMode } from '../../types/enums/theme-mode.enum.js';

const baseTheme: ThemeOptions = {
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    background: {
      default: BACKGROUND_COLOR,
    },
  },

  components: {
    MuiButton: {},
  },
};

const lightTheme = createTheme(baseTheme);

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    background: {
      default: BACKGROUND_DARK_COLOR,
    },
    mode: 'dark',
  },
});

export const Theme: Record<ThemeMode, MUITheme> = {
  LIGHT: lightTheme,
  DARK: darkTheme,
};
