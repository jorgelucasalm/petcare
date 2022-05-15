import PrimaryButton from '../../../../../../components/PrimaryButton';
import { Card, Container } from './style';

function ModalOk({ showModal, setShowModal }) {

  return (<>
    {showModal && <Container className="modal"
      onClick={e => { e.target.className.includes('modal') && setShowModal(false) }}>
      <Card>
        <h2>Consulta agendada!</h2>
        <p>Para ver este e outros agendamentos basta ir em requisições na tela home :D</p>
        <PrimaryButton onClick={() => setShowModal(false)}>Ok</PrimaryButton>
      </Card>
    </Container>}
  </>
  );
}

export default ModalOk;
