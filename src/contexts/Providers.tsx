import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToggleThemeContext } from './ToggleThemeProvider';

const Providers: React.FC = ({ children }) => {
  const { theme } = useContext(ToggleThemeContext);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
