import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import resume from '../../assets/resume.pdf';

const StyledHero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.text};
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
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
        <Subtitle variants={itemVariants}>Full Stack Developer | UWB Enthusiast</Subtitle>
        <ButtonContainer variants={itemVariants}>
          <StyledButton onClick={handleDownloadResume} variants={itemVariants}>Download Resume</StyledButton>
          <Link to="projects" smooth={true} duration={500}>
            <StyledButton variants={itemVariants}>View Projects</StyledButton>
          </Link>
        </ButtonContainer>
      </motion.div>
    </StyledHero>
  );
};

export default Hero; 