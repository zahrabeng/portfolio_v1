import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
  )
}

export default App;
