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

function App() {
  return (
    <CustomThemeProvider>
      <Theme> {/* Wrap with the styled-components theme provider */}
        <div className="App">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </Theme>
    </CustomThemeProvider>
  );
}

export default App;
