import React from 'react';
// import './App.css'; // We will use styled-components or global styles later
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext';
import Theme from './styles/Theme'; // Import the custom theme provider
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow-x: hidden;
  width: 100%;
`;

const MainContent = styled.main`
  padding-top: 70px; // Height of the navbar
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`;

function App() {
  return (
    <CustomThemeProvider>
      <Theme> {/* Wrap with the styled-components theme provider */}
        <GlobalStyle />
        <AppContainer>
          <Navbar />
          <MainContent>
            <Section id="hero">
              <Hero />
            </Section>
            <Section id="about">
              <About />
            </Section>
            <Section id="skills">
              <Skills />
            </Section>
            <Section id="experience">
              <Experience />
            </Section>
            <Section id="projects">
              <Projects />
            </Section>
            <Section id="certifications">
              <Certifications />
            </Section>
            <Section id="contact">
              <Contact />
            </Section>
          </MainContent>
          <Footer />
        </AppContainer>
      </Theme>
    </CustomThemeProvider>
  );
}

export default App;
