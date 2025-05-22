import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import experienceData from '../../constants/experience';

const StyledExperience = styled(motion.section)`
  padding: 8rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    padding: 6rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
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
    margin-bottom: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  &::after {
    display: none;
  }
`;

const ExperienceEntry = styled(motion.div)`
  padding: 0;
  position: relative;
  background-color: inherit;
  width: calc(50% - 1rem);
  margin-bottom: 2rem;
  box-sizing: border-box;

  &::after {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-bottom: 1.5rem;
  }

  &:nth-child(odd),
  &:nth-child(even) {
    left: auto;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Content = styled.div`
  padding: 30px;
  background: ${({ theme }) => `${theme.colors.cardBackground}CC`};
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 20px ${({ theme }) => `${theme.colors.primary}10`},
              0 0 30px ${({ theme }) => `${theme.colors.primary}20`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}20`};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 35px ${({ theme }) => `${theme.colors.primary}80`},
                0 0 50px ${({ theme }) => `${theme.colors.primary}40`};
  }

  h3 {
    margin-top: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 5px ${({ theme }) => `${theme.colors.primary}20`};
    margin-bottom: 1rem;
  }

  p {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => `${theme.colors.text}CC`};
  }

  ul {
    padding-left: 20px;
    margin: 0;
    flex-grow: 1;
  }

  li {
    margin-bottom: 1rem;
    line-height: 1.6;
    position: relative;

    &::marker {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// Animation variants
const experienceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <StyledExperience id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FaBriefcase /> Experience
      </SectionTitle>
      <Timeline>
        {experienceData.map((entry, index) => (
          <ExperienceEntry
            key={index}
            variants={experienceVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Content>
              <h3>{entry.company} - {entry.role}</h3>
              <p>{entry.period} | {entry.location}</p>
              <ul>
                {entry.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </Content>
          </ExperienceEntry>
        ))}
      </Timeline>
    </StyledExperience>
  );
};

export default Experience; 