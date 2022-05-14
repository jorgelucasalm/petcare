import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from './pages/Register'
// import ScheduleAppointment from './pages/Categories/components/AppointmentSchedule'
//import Configurar from "./pages/Configurar";

//import VaccineSchedule from './pages/Categories/components/VaccineSchedule'
import dog from "./assets/style/themes/dog";
import cat from "./assets/style/themes/cat";
import { useState } from "react";
import Routes from './routes/routes'

function App() {
  const [theme, setTheme] = useState(dog)

  const handleTheme = () => {
    setTheme(theme.title === 'dog' ? cat : dog)
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar changeTheme={handleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
