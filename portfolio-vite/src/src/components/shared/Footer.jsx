import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const StyledFooter = styled(motion.footer)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Footer = () => {
  return (
    <StyledFooter
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <SocialLinks>
        <SocialIconLink href="https://www.linkedin.com/in/jahnaviurugonda" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIconLink>
        <SocialIconLink href="https://github.com/jaanu2003" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIconLink>
        <SocialIconLink href="mailto:jahnavi22031@gmail.com"><FaEnvelope /></SocialIconLink>
      </SocialLinks>
      <Copyright>&copy; {new Date().getFullYear()} Jahnavi Urugonda. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

export default Footer; 