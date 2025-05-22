import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

export const lightTheme = {
  colors: {
    primary: '#001F3F',
    secondary: '#0074D9',
    background: '#FFFFFF',
    text: '#333333',
    cardBackground: '#F8F9FA',
    border: '#DEE2E6',
    gradient: {
      primary: 'linear-gradient(135deg, #001F3F 0%, #0074D9 100%)',
      secondary: 'linear-gradient(135deg, #0074D9 0%, #001F3F 100%)'
    }
  }
};

export const darkTheme = {
  colors: {
    primary: '#0074D9',
    secondary: '#001F3F',
    background: '#212529',
    text: '#FFFFFF',
    cardBackground: '#343A40',
    border: '#495057',
    gradient: {
      primary: 'linear-gradient(135deg, #0074D9 0%, #001F3F 100%)',
      secondary: 'linear-gradient(135deg, #001F3F 0%, #0074D9 100%)'
    }
  }
};

const Theme = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export default Theme; 