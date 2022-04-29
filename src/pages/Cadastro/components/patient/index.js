import Input from '../../../../components/Input';
import PrimaryButton from '../../../../components/PrimaryButton';
import ProgressBar from '../../../../components/ProgressBar';
import SecundaryButton from '../../../../components/SecundaryButton';
import { Container, Card, TextBox, Buttons } from './style';

function Patient({ showModal, closeModal, back, onSubmit }) {
  return (
    <>
      {showModal ? (
        <Container className="modal" onClick={e => { e.target.className.includes('modal') && closeModal() }}>
          <Card>
            <header>
              <h2>Cadastro</h2>
              <p>Paciente</p>
              <ProgressBar size={'50'} />
            </header>

            <TextBox>
              <Input placeholder={'*Nome:'} />
              <Input placeholder={'*Raça:'} />
              <Input placeholder={'*Peso:'} />
              <Input placeholder={'*Idade:'} />
              <Input placeholder={'Tipo Sangúineo:'} />
              <Input placeholder={'Lorem Ipsum:'} />
            </TextBox>

            <Buttons>
              <PrimaryButton onClick={onSubmit}>Próximo</PrimaryButton>
              <SecundaryButton onClick={back}>Voltar</SecundaryButton>
            </Buttons>
          </Card>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Patient;
