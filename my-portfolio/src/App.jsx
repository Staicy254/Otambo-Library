import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import HeroSection from "./components/Herosection/HeroSection";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";


const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div className= {`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <HeroSection />
      <Projects />
      <SkillsSection />
      <ContactSection />
      
    </div>
  );
};

export default App;
