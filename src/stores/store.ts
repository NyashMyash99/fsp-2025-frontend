import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme/theme.slice.js';
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

export const store = configureStore({
  reducer: {
    [themeSlice.name]: persistReducer(
      { key: themeSlice.name, storage },
      themeSlice.reducer,
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: isDevelopmentMode(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
