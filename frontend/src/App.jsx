import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillsSection from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <HeroSection/>
      <SkillsSection/>
    </ThemeProvider>
  )
}

export default App;
