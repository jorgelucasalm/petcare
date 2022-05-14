import { useState } from "react";
import SelectButton from "../../../../components/SelectButton";
import { Container, Card } from "./style";
import VaccineSchedule from './components/VaccineSchedule'
import ScheduleAppointment from "./components/AppointmentSchedule";

function Categories({ showModal, setShowModal }) {
  const [showVacine, setShowVacine] = useState(false)
  const [showAppointment, setShowAppointment] = useState(false)

  const openModalVacine = () => {
    setShowVacine(true)
  }

  const openModalAppointment = () => {
    setShowAppointment(true)
  }
  return (
    <>
      {showModal && <Container
        className="modal"
        onClick={e => { e.target.className.includes('modal') && setShowModal(false) }}>
        <Card>
          <header>
            <h1>Categorias</h1>
            <p>Selecione uma das opções</p>
          </header>
          <div>
            <SelectButton onClick={openModalAppointment}>Consulta de Rotina</SelectButton>
            <SelectButton>Retorno</SelectButton>
            <SelectButton onClick={openModalVacine}>Vacinação</SelectButton>
            <SelectButton>Exames</SelectButton>
          </div>
        </Card>
        <VaccineSchedule showModal={showVacine} setShowModal={setShowVacine}></VaccineSchedule>
        <ScheduleAppointment showModal={showAppointment} setShowModal={setShowAppointment}></ScheduleAppointment>
      </Container>}
    </>
  );
}

export default Categories;