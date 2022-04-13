import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Medico from "./pages/Medico";

import dog from "./assets/style/themes/dog";
import cat from "./assets/style/themes/cat";
import medico from "./assets/style/themes/med";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(medico)

  const handleTheme = () => {
    setTheme(theme.title === 'dog' ? cat : dog)
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar changeTheme={handleTheme} isAdm={false} />
      <Medico />
    </ThemeProvider>
  )
}

export default App;
