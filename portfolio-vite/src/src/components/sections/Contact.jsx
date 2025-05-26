import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { GlowButton, GlowCard } from '../../styles/SharedStyles';

const StyledContact = styled(motion.section)`
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
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-shadow: 0 0 10px ${({ theme }) => `${theme.colors.primary}40`};
  position: relative;
  letter-spacing: 1px;

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

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const ContactForm = styled(motion.form)`
  flex: 2; /* Allow form to take up more space */
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Increased gap between form groups */
  background: ${({ theme }) => `${theme.colors.cardBackground}CC`};
  padding: 3rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px ${({ theme }) => `${theme.colors.primary}10`},
              0 0 30px ${({ theme }) => `${theme.colors.primary}20`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}20`};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${({ theme }) => `${theme.colors.primary}20`},
                0 0 40px ${({ theme }) => `${theme.colors.primary}30`};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`;

const InfoCardsContainer = styled(motion.div)`
  flex: 1; /* Allow info cards to take up remaining space */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoCard = styled(GlowCard)`
  background: ${({ theme }) => `${theme.colors.cardBackground}CC`};
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px ${({ theme }) => `${theme.colors.primary}10`},
              0 0 30px ${({ theme }) => `${theme.colors.primary}20`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}20`};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px ${({ theme }) => `${theme.colors.primary}20`},
                0 0 40px ${({ theme }) => `${theme.colors.primary}30`};
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const InfoItem = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease;
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.2rem 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }

  &:hover + svg {
    transform: scale(1.1);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}40`};
  background: ${({ theme }) => `${theme.colors.background}80`};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}40`};
  }

  &::placeholder {
    color: ${({ theme }) => `${theme.colors.text}80`};
  }
`;

const SubmitButton = styled(GlowButton)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  width: 100%;
`;

const FormMessage = styled(motion.div)`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  text-align: center;
  background: ${({ type, theme }) => 
    type === 'success' 
      ? `${theme.colors.success}20` 
      : `${theme.colors.error}20`};
  color: ${({ type, theme }) => 
    type === 'success' 
      ? theme.colors.success 
      : theme.colors.error};
  border: 1px solid ${({ type, theme }) => 
    type === 'success' 
      ? theme.colors.success 
      : theme.colors.error};
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3 
    }
  }
};

const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const infoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("4H4an2KuskvjuusZL");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // EmailJS configuration
    const serviceId = 'service_txwmjcs';
    const templateId = 'template_neptypi';

    emailjs.sendForm(serviceId, templateId, form.current)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus({
          type: 'error',
          message: `Failed to send message: ${error.text || 'Please try again later.'}`
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
        <ContactForm 
          ref={form} 
          onSubmit={sendEmail} 
          variants={formVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          {status.message && (
            <FormMessage
              type={status.type}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {status.message}
            </FormMessage>
          )}
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="Your email"
              disabled={isSubmitting}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Your Message</Label>
            <Input 
              as="textarea"
              id="message" 
              name="message" 
              required 
              placeholder="Your message"
              rows="5"
              disabled={isSubmitting}
            />
          </FormGroup>
          <SubmitButton 
            type="submit" 
            variants={formVariants}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </SubmitButton>
        </ContactForm>
        <InfoCardsContainer variants={infoVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <InfoCard>
            <InfoTitle><FaPhone /> Contact Information</InfoTitle>
            <InfoItem>
              <FaEnvelope /> 
              <StyledLink href="mailto:jahnavi22031@gmail.com">
                jahnavi22031@gmail.com
              </StyledLink>
            </InfoItem>
          </InfoCard>
          <InfoCard>
            <InfoTitle><FaLinkedin /> Professional Links</InfoTitle>
            <InfoItem>
              <FaGithub /> 
              <StyledLink href="https://github.com/jaanu2003" target="_blank" rel="noopener noreferrer">
                GitHub
              </StyledLink>
            </InfoItem>
            <InfoItem>
              <FaLinkedin /> 
              <StyledLink href="https://www.linkedin.com/in/jahnavi-urugonda-056333215/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </StyledLink>
            </InfoItem>
          </InfoCard>
        </InfoCardsContainer>
      </ContactContainer>
    </StyledContact>
  );
};

export default Contact; 