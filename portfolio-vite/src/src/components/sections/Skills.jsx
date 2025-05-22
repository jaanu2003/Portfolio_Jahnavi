import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import skillsData from '../../constants/skills';
import { GlowCard } from '../../styles/SharedStyles';

const StyledSkills = styled(motion.section)`
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

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const SkillCategory = styled(GlowCard)`
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  text-align: left;
  padding: 2rem;
  background: ${({ theme }) => `${theme.colors.cardBackground}CC`};
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  ${SkillCategory}:hover &::after {
    width: 100%;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const SkillName = styled.span`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  ${SkillItem}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => `${theme.colors.primary}40`},
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${SkillItem}:hover &::after {
    opacity: 1;
  }
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => `${theme.colors.primary}40`},
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1 
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.5, ease: 'easeInOut' },
  }),
};

const Skills = () => {
  // Group skills by category
  const categorizedSkills = skillsData.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <StyledSkills id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Technical Skills
      </SectionTitle>
      <SkillsContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {Object.keys(categorizedSkills).map((category) => (
          <SkillCategory key={category} variants={itemVariants}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {categorizedSkills[category].map((skill) => (
                <SkillItem key={skill.name} variants={itemVariants}>
                  <SkillName>{skill.name}</SkillName>
                  <ProgressBarContainer>
                    <ProgressBarFill 
                      variants={progressBarVariants}
                      custom={skill.level} // Pass the level as a custom prop
                    />
                  </ProgressBarContainer>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </StyledSkills>
  );
};

export default Skills; 