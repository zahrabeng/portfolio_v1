import Navbar from "./components/Navbar";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <AboutSection/>
      <ContactSection/>
    </ThemeProvider>
  )
}

export default App;
