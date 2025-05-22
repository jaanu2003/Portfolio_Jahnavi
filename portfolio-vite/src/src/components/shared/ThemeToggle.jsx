import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const StyledThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledThemeButton onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </StyledThemeButton>
  );
};

export default ThemeToggle; 