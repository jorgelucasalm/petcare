import { useState } from "react";
import SelectButton from "../../../../components/SelectButton";
import { Container, Card } from "./style";
import VaccineSchedule from './components/VaccineSchedule'

function Categories({ showModal, setShowModal }) {
  const [showVacine, setShowVacine] = useState(false)

  const openModalVacine = () => {
    setShowVacine(true)
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
            <SelectButton>Consulta de Rotina</SelectButton>
            <SelectButton>Retorno</SelectButton>
            <SelectButton onClick={openModalVacine}>Vacinação</SelectButton>
            <SelectButton>Exames</SelectButton>
          </div>
        </Card>
        <VaccineSchedule showModal={showVacine} setShowModal={setShowVacine}></VaccineSchedule>
      </Container>}
    </>
  );
}

export default Categories;