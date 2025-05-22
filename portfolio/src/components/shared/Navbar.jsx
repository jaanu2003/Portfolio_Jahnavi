import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    transition: left 0.3s ease-in-out;
    padding: 1rem;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <Logo>Jahnavi Urugonda</Logo>
      <NavLinks isOpen={isOpen}>
        <NavItem><NavLink to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</NavLink></NavItem>
        <NavItem><NavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</NavLink></NavItem>
        <NavItem><NavLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</NavLink></NavItem>
        <NavItem><NavLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</NavLink></NavItem>
        <NavItem><NavLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</NavLink></NavItem>
        <NavItem><NavLink to="certifications" smooth={true} duration={500} onClick={toggleMenu}>Certifications</NavLink></NavItem>
        <NavItem><NavLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</NavLink></NavItem>
      </NavLinks>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <ThemeToggle />
    </StyledNavbar>
  );
};

export default Navbar; 