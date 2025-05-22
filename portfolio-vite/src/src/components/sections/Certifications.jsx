import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlowCard, GlowLink } from '../../styles/SharedStyles';
import { FaAward, FaCertificate } from 'react-icons/fa';

const StyledCertifications = styled(motion.section)`
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertificationCard = styled(GlowCard)`
  background: ${({ theme }) => `${theme.colors.cardBackground}CC`};
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradient.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CertificationIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${CertificationCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const CertificationName = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  transition: color 0.3s ease;

  ${CertificationCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CertificationLink = styled(GlowLink)`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
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
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Certifications = () => {
  const certificationsList = [
    {
      name: 'Azure Fundamentals and Azure Data Fundamentals from Microsoft.',
      link: '#',
      icon: <FaCertificate />
    },
    {
      name: 'Supervised Machine Learning in Stanford University from Coursera.',
      link: '#',
      icon: <FaAward />
    },
    {
      name: 'Cloud Foundations from AWS academy.',
      link: '#',
      icon: <FaCertificate />
    },
    {
      name: 'Programming with Javascript,Python for Everybody, HTML,CSS and Javascript from Coursera.',
      link: '#',
      icon: <FaAward />
    },
    {
      name: 'Completed Software Virtual Experience and Global Finance and Business Management from Forage Supported By J.P.Morgan.',
      link: '#',
      icon: <FaCertificate />
    },
    {
      name: 'Python,Javascript,SQL,Java from Hackerrank.',
      link: '#',
      icon: <FaAward />
    },
    {
      name: 'DBMS Certification Course from Oracle.',
      link: '#',
      icon: <FaCertificate />
    }
  ];

  return (
    <StyledCertifications id="certifications"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FaAward /> Certifications
      </SectionTitle>
      <CertificationsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {certificationsList.map((cert, index) => (
          <CertificationCard key={index} variants={cardVariants}>
            <CertificationIcon>{cert.icon}</CertificationIcon>
            <CertificationName>{cert.name}</CertificationName>
            <CertificationLink href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate <FaCertificate />
            </CertificationLink>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </StyledCertifications>
  );
};

export default Certifications; 