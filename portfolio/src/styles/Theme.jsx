import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

const lightTheme = {
  colors: {
    primary: '#6a0572', // Example vibrant purple
    secondary: '#ab349d', // Example vibrant pink
    background: '#ffffff', // White background
    text: '#333333', // Dark text
    accent: '#ffd700', // Example gold accent
  },
};

const darkTheme = {
  colors: {
    primary: '#4a044e', // Darker vibrant purple
    secondary: '#8b2a8d', // Darker vibrant pink
    background: '#121212', // Dark background
    text: '#ffffff', // White text
    accent: '#ffbf00', // Darker gold accent
  },
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