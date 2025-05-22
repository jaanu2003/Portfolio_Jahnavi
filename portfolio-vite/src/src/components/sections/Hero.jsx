import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import { FaDownload, FaCode } from 'react-icons/fa';
import resume from '../../assets/resume.pdf';
import { GlowButton } from '../../styles/SharedStyles';

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      ${({ theme }) => `${theme.colors.background}20`} 100%
    );
    pointer-events: none;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0 0 10px ${({ theme }) => `${theme.colors.primary}40`};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  text-shadow: 0 0 8px ${({ theme }) => `${theme.colors.primary}30`};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const StyledGlowButton = styled(GlowButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => `${theme.colors.primary}20`};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-3px);
    box-shadow: 0 0 20px ${({ theme }) => `${theme.colors.primary}40`};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  svg {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3 
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const handleDownloadResume = () => {
    saveAs(resume, 'Jahnavi_Urugonda_Resume.pdf');
  };

  return (
    <StyledHero id="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>Jahnavi Urugonda</Title>
        <Subtitle variants={itemVariants}>Full Stack Developer</Subtitle>
        <ButtonContainer variants={itemVariants}>
          <StyledGlowButton onClick={handleDownloadResume} variants={itemVariants}>
            <FaDownload /> Download Resume
          </StyledGlowButton>
        </ButtonContainer>
      </motion.div>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </ScrollIndicator>
    </StyledHero>
  );
};

export default Hero; 