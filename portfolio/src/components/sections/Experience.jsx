import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import experienceData from '../../constants/experience';

const StyledExperience = styled(motion.section)`
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
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;

    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const ExperienceEntry = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: ${({ theme }) => theme.colors.accent};
    border: 4px solid ${({ theme }) => theme.colors.primary};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &::after {
      left: 15px;
    }
  }

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;

    &::after {
      left: -16px;
    }

    @media (max-width: 768px) {
      left: 0;

      &::after {
        left: 15px;
      }
    }
  }
`;

const Content = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  border-radius: 6px;
  text-align: left;

  h3 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  p {
    font-style: italic;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
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
        Experience
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