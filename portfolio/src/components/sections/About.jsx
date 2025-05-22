import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledAbout = styled(motion.section)`
  padding: 6rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 1.5rem auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const EducationDetails = styled(motion.div)`
  margin-top: 2rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const About = () => {
  return (
    <StyledAbout id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </SectionTitle>
      <AboutText
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I am a passionate Computer Science graduate with a strong foundation in Ultra-Wideband (UWB) technology, Python, Java, and full-stack development. I am eager to leverage my skills and knowledge to contribute to innovative projects and solve challenging real-world problems.
      </AboutText>
      <EducationDetails
         initial={{ y: 50, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3>Education</h3>
        <p><strong>Shri Vishnu Engineering College for Women</strong></p>
        <p>Bachelor of Science in Computer Science (GPA: 9.23 / 10.00)</p>
        <p>Bhimavaram, Andhra Pradesh | August 2024</p>
      </EducationDetails>
      {/* Add more sections for key highlights or interests if needed */}
    </StyledAbout>
  );
};

export default About; 