import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import social icons
import emailjs from 'emailjs-com'; // Import emailjs

const StyledContact = styled(motion.section)`
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

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const FormGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
`;

const SubmitButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const SocialIconLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Animation variants
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const socialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    e.target.reset();
  };

  return (
    <StyledContact id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get in Touch
      </SectionTitle>
      <ContactContainer>
        <ContactForm ref={form} onSubmit={sendEmail} variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
          </FormGroup>
          <SubmitButton type="submit" variants={formVariants}>Send Message</SubmitButton>
        </ContactForm>
        <SocialLinks variants={socialVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <SocialIconLink href="https://www.linkedin.com/in/jahnaviurugonda" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIconLink>
          <SocialIconLink href="https://github.com/jaanu2003" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIconLink>
          <SocialIconLink href="mailto:jahnavi22031@gmail.com"><FaEnvelope /></SocialIconLink>
        </SocialLinks>
      </ContactContainer>
    </StyledContact>
  );
};

export default Contact; 