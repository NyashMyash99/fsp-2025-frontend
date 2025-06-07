import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8BA4F9',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          borderRadius: '4px',
          height: '40px',       // Фиксированная высота
          minWidth: '120px',    // Минимальная ширина
          padding: '8px 16px',  // Стандартные отступы
        },
      },
      defaultProps: {
        variant: 'contained',
        // Убираем fullWidth, чтобы кнопки не растягивались
        fullWidth: false,
      },
    },
  },
});