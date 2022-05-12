import PrimaryButton from '../../../../../../components/PrimaryButton';
import SecundaryButton from '../../../../../../components/SecundaryButton';
import Dropdown from '../../../../../../components/Dropdown';

import {
  Container,
  Card,
  DropdownContent,
  Id,
  CheckContent,
  InfoBox,
  Buttons,
} from './style';

function VaccineSchedule({ showModal, setShowModal }) {
  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <>
      {showModal && <Container className="modal"
        onClick={e => { e.target.className.includes('modal') && setShowModal(false) }}>
        <Card>
          <header>
            <h2>Vacinação</h2>
            <p>
              Sua solicitação pode levar até 48h para ser aprovada por um de
              nossos atendentes.
            </p>
          </header>

          <DropdownContent>
            <p>Categoria:</p>
            <Id>
              <p>Vacinação</p>
            </Id>

            <p>Data para o atendimento:</p>
            <Dropdown>
              <option>Teste 1</option>
              <option>Teste 2</option>
              <option>Teste 3</option>
            </Dropdown>

            <p>Horário para o atendimento:</p>
            <Dropdown>
              <option>Teste 1</option>
              <option>Teste 2</option>
              <option>Teste 3</option>
            </Dropdown>

            <p>Número da Dose:</p>
            <Dropdown>
              <option>DOSE ÚNICA</option>
              <option>1º DOSE</option>
              <option>2º DOSE</option>
              <option>3º DOSE</option>
            </Dropdown>
          </DropdownContent>


          <CheckContent>
            <p>Faz uso de alguma medicação?</p>
            <div>
              <input type={'checkbox'} id={'Y'} name={'choice'} />
              <label for={'Y'}>Sim</label>
            </div>
          </CheckContent>


          <InfoBox color="alert">
            <h3>No que isso interfere?</h3>
            <p>Dependendo da medicação o ideal é aguardar o tratamento terminar antes de vacinar o animal.</p>
          </InfoBox>

          <Buttons>
            <PrimaryButton color={''}>Solicitar</PrimaryButton>
            <SecundaryButton color={''} onClick={closeModal}>Cancelar</SecundaryButton>
          </Buttons>
        </Card>
      </Container>}
    </>
  );
}

export default VaccineSchedule;
