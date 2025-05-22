import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projectsData from '../../constants/projects';

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 200px; // Fixed height for images
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 4px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Cover the container while maintaining aspect ratio
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto; // Push links to the bottom of the card
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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
            <ProjectDescription>{project.description}</ProjectDescription>
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