import { configureStore, type Reducer } from '@reduxjs/toolkit';
import { themeSlice, type ThemeState } from './theme/theme.slice.js';
import { isDevelopmentMode } from '../utils/helpers/development.helper.js';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { conversationsApi } from './conversation/conversations.api.js';
import type { PersistPartial } from 'redux-persist/lib/persistReducer';

export const store = configureStore({
  reducer: {
    [themeSlice.name]: persistReducer<ThemeState>(
      { key: themeSlice.name, storage },
      themeSlice.reducer,
    ) as Reducer<ThemeState & PersistPartial>,
    [conversationsApi.reducerPath]: conversationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(conversationsApi.middleware),
  devTools: isDevelopmentMode(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
