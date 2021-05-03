import AppProvider from 'contexts';
import React from 'react';
import GlobalStyle from 'styles/globalStyle';
import AppRoutes from './routes';

const App: React.FC = () => (
  <>
    <AppProvider>
      <GlobalStyle />
      <AppRoutes />
    </AppProvider>
  </>
);

export default App;
