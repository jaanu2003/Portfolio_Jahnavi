import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projectsData from '../../constants/projects';
import { GlowCard, GlowLink } from '../../styles/SharedStyles';

const StyledProjects = styled(motion.section)`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(GlowCard)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 420px;
  overflow: hidden;
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({ theme }) => `${theme.colors.background}20`} 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const DescriptionList = styled.ul`
  list-style: disc;
  padding-left: 1.2em;
  margin-bottom: 1.5rem;
  flex-grow: 1;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: ${({ theme }) => `${theme.colors.text}CC`};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}40`};
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled(GlowLink)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <StyledProjects id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Projects
      </SectionTitle>
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} variants={itemVariants}>
            {project.imageUrl && (
              <ProjectImageContainer>
                <ProjectImage src={project.imageUrl} alt={`${project.title} screenshot`} />
              </ProjectImageContainer>
            )}
            <ProjectTitle>{project.title}</ProjectTitle>
            <DescriptionList>
              {project.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </DescriptionList>
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              {project.github && <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">GitHub</ProjectLink>}
              {project.link && <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</ProjectLink>}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </StyledProjects>
  );
};

export default Projects; 