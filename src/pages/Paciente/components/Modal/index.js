import Input from '../../../../components/Input/style';
import PrimaryButton from '../../../../components/PrimaryButton';
import SecundaryButton from '../../../../components/SecundaryButton';
import { Container, Card, TextBox, Buttons } from './style';

function Modal(props) {
  return (
    <>
      {props.showModal ? (
        <Container onClick={props.setShowModal(false)}>
          <Card>
            <header>
              <h2>Cadastro</h2>
              <p>Paciente</p>
              <img />
            </header>

            <TextBox>
              <Input placeholder={'dale'} />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </TextBox>

            <Buttons>
              <PrimaryButton>Próximo</PrimaryButton>
              <SecundaryButton>Já tenho conta</SecundaryButton>
            </Buttons>
          </Card>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;
