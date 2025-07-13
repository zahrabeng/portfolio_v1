import Navbar from "./components/Navbar";
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
    </ThemeProvider>
  )
}

export default App;
