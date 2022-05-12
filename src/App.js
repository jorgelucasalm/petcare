import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import dog from "./assets/style/themes/dog";
import cat from "./assets/style/themes/cat";
import { useState } from "react";
import Settings from "./pages/Home/components/Settings";

function App() {
  const [theme, setTheme] = useState(dog)

  const handleTheme = () => {
    setTheme(theme.title === 'dog' ? cat : dog)
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar changeTheme={handleTheme} />
      <Settings />
    </ThemeProvider>
  );
}

export default App;
