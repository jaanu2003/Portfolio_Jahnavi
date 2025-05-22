import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CertificationsList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const CertificationItem = styled(motion.li)`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Certifications = () => {
  const certificationsList = [
    'Azure Fundamentals and Azure Data Fundamentals from Microsoft.',
    'Supervised Machine Learning in Stanford University from Coursera.',
    'Cloud Foundations from AWS academy.',
    'Programming with Javascript,Python for Everybody, HTML,CSS and Javascript from Coursera.',
    'Completed Software Virtual Experience and Global Finance and Business Management from Forage Supported By J.P.Morgan.',
    'Python,Javascript,SQL,Java from Hackerrank.',
    'DBMS Certification Course from Oracle.',
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
        Certifications
      </SectionTitle>
      <CertificationsList
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {certificationsList.map((cert, index) => (
          <CertificationItem key={index} variants={itemVariants}>
            {cert}
          </CertificationItem>
        ))}
      </CertificationsList>
    </StyledCertifications>
  );
};

export default Certifications; 