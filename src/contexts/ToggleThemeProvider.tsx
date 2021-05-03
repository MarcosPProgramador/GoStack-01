import usePersistedState from 'hooks/usePersistedState';
import React, { createContext, Dispatch, SetStateAction } from 'react';
import { DefaultTheme } from 'styled-components';
import light from 'themes/light';

interface IToggleThemeContext {
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
  theme: DefaultTheme;
}
export const ToggleThemeContext = createContext<IToggleThemeContext>(
  {} as IToggleThemeContext
);

const ToggleThemeProvider: React.FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = usePersistedState('@GithubExplorer:theme', light);

  return (
    <ToggleThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeProvider;
