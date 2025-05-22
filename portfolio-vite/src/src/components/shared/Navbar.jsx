import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GlowLink } from '../../styles/SharedStyles';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => `${theme.colors.background}CC`};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled(GlowLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: ${({ theme }) => `${theme.colors.background}CC`};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    padding: 1rem;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => `${theme.colors.primary}10`};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggleWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <Logo as={Link} to="hero" smooth={true} duration={500}>Jahnavi Urugonda</Logo>
      <NavContainer>
        <NavLinks isOpen={isOpen}>
          <NavItem><StyledNavLink to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="certifications" smooth={true} duration={500} onClick={toggleMenu}>Certifications</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</StyledNavLink></NavItem>
        </NavLinks>
        <ThemeToggleWrapper>
          <ThemeToggle />
        </ThemeToggleWrapper>
        <HamburgerIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>
      </NavContainer>
    </StyledNavbar>
  );
};

export default Navbar; 