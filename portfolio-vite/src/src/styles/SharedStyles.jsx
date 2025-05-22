import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }
`;

export const GlowButton = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    animation: ${glowAnimation} 2s infinite;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GlowCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    animation: ${glowAnimation} 2s infinite;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    background: linear-gradient(
      45deg,
      transparent,
      ${({ theme }) => theme.colors.primary}20,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const GlowLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  position: relative;
  padding: 0.2rem 0;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.primary}40;
    
    &::after {
      width: 100%;
    }
  }
`; 