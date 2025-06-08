import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './stores/store.js';
import { ThemeContainer } from './components/system/ThemeContainer.js';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

import '../infrastructure/i18n.config.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <ThemeContainer>
              <Suspense fallback={<></>}>
                <App />
              </Suspense>
            </ThemeContainer>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
