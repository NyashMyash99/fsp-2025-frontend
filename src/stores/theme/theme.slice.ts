import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { RootState } from '../store.js';
import { ThemeMode } from '../../utils/types/enums/theme-mode.enum.js';

const getInitialTheme = (): ThemeMode => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? ThemeMode.DARK : ThemeMode.LIGHT;
};

export interface ThemeState {
  theme: ThemeMode;
}

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme =
        state.theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    },
  },
});

export const themeActions = themeSlice.actions;
export const useThemeState = (): ThemeState =>
  useSelector((state: RootState) => state.theme);
