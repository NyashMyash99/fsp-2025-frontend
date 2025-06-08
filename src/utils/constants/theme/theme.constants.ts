import {
  createTheme,
  type GlobalStylesProps,
  type Theme as MUITheme,
  type ThemeOptions,
} from '@mui/material';
import {
  BACKGROUND_COLOR,
  BACKGROUND_DARK_COLOR,
  PRIMARY_COLOR,
} from '../color.constants.js';
import { ThemeMode } from '../../types/enums/theme-mode.enum.js';

export const GLOBAL_STYLES: GlobalStylesProps['styles'] = (theme) => ({
  body: {
    height: '100vh',
    width: '100vw',
    padding: '16px 0',
    overflow: 'hidden',

    [theme.breakpoints.down('xl')]: {
      overflowY: 'scroll',
    },
  },

  main: {
    display: 'flex',
    minHeight: '100%',
  },

  'main > .MuiContainer-root': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  '::-webkit-scrollbar': {
    width: 'calc(0.5vw + 0.5vh)',
  },

  '::-webkit-scrollbar-thumb': {
    background: PRIMARY_COLOR.main,
    borderRadius: '20px',
  },
});

const baseTheme: ThemeOptions = {
  palette: {
    primary: {
      main: PRIMARY_COLOR.main,
    },
    background: {
      default: BACKGROUND_COLOR.main,
    },
  },

  typography: {
    h1: {
      fontWeight: 700,
      letterSpacing: '-5px',
      lineHeight: 1,
    },
    h3: {
      fontWeight: 500,
      letterSpacing: '-5px',
      lineHeight: 1,
    },
    h6: {
      letterSpacing: '-1px',
      lineHeight: 1,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px 48px !important',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          background: BACKGROUND_COLOR.darken,
          borderRadius: '10px !important',
        },
        input: {
          padding: '30px !important',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          padding: '30px 30px 30px 0 !important',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadows[1],
          '&::before': {
            borderBottom: 'none !important',
          },
          '&::after': {
            borderBottom: 'none !important',
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },
};

const lightTheme = createTheme(baseTheme);

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    background: {
      default: BACKGROUND_DARK_COLOR.main,
    },
    mode: 'dark',
  },
});

export const Theme: Record<ThemeMode, MUITheme> = {
  LIGHT: lightTheme,
  DARK: darkTheme,
};
