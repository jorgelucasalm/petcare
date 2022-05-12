import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExamSchedule from './pages/Categories/components/ExamSchedule'
// import ScheduleAppointment from './pages/Categories/components/AppointmentSchedule'
//import Configurar from "./pages/Configurar";

//import VaccineSchedule from './pages/Categories/components/VaccineSchedule'
import dog from "./assets/style/themes/dog";
import cat from "./assets/style/themes/cat";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(dog)

  const handleTheme = () => {
    setTheme(theme.title === 'dog' ? cat : dog)
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar changeTheme={handleTheme} />
      <ExamSchedule />
    </ThemeProvider>
  );
}

export default App;
