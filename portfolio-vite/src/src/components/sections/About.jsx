import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUser, FaLightbulb } from 'react-icons/fa';

const StyledAbout = styled(motion.section)`
  padding: 6rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;

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

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const AboutContainer = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutCard = styled(motion.div)`
  background: ${({ theme }) => `${theme.colors.cardBackground}CC`};
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px ${({ theme }) => `${theme.colors.primary}10`},
              0 0 30px ${({ theme }) => `${theme.colors.primary}20`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}20`};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 35px ${({ theme }) => `${theme.colors.primary}80`},
                0 0 50px ${({ theme }) => `${theme.colors.primary}40`};
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 5px ${({ theme }) => `${theme.colors.primary}20`};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const EducationDetails = styled(motion.div)`
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-shadow: 0 0 5px ${({ theme }) => `${theme.colors.primary}30`};
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    line-height: 1.4;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 0 0 5px ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

const HighlightsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  text-align: left;

  li {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    line-height: 1.4;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin-top: 0.2rem;
      flex-shrink: 0;
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
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const About = () => {
  return (
    <StyledAbout id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionTitle variants={itemVariants}>
        <FaUser /> About Me
      </SectionTitle>
      <AboutContainer>
        <AboutCard variants={itemVariants}>
          <AboutText>
            I am a passionate Computer Science graduate with a strong foundation in Python, Java, and Full-Stack Development. I am eager to leverage my skills and knowledge to contribute to innovative projects and solve challenging real-world problems.
          </AboutText>
          <HighlightsList variants={itemVariants}>
            <motion.li variants={itemVariants}>
              <FaLightbulb />
              <span>Experienced in full-stack development with modern frameworks and tools</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <FaLightbulb />
              <span>Strong problem-solving skills and passion for creating efficient solutions</span>
            </motion.li>
          </HighlightsList>
        </AboutCard>
        <AboutCard variants={itemVariants}>
          <EducationDetails>
            <h3><FaGraduationCap /> Education</h3>
            <p><strong>Shri Vishnu Engineering College for Women</strong></p>
            <p>Bachelor of Science in Computer Science</p>
            <p>GPA: 9.23 / 10.00</p>
            <p>Bhimavaram, Andhra Pradesh | August 2024</p>
          </EducationDetails>
        </AboutCard>
      </AboutContainer>
    </StyledAbout>
  );
};

export default About; 