import { useEffect } from 'react';
import Input from '../../../../components/Input/style';
import PrimaryButton from '../../../../components/PrimaryButton';
import SecundaryButton from '../../../../components/SecundaryButton';
import { Container, Card, TextBox, Buttons } from './style';

function Modal({ showModal, closeModal }) {
  return (
    <>
      {showModal ? (
        <Container className="modal" onClick={e => { closeModal(e.target) }}>
          <Card>
            <header>
              <h2>Cadastro</h2>
              <p>Paciente</p>
              <img />
            </header>

            <TextBox>
              <Input placeholder={'*Nome:'} />
              <Input placeholder={'*Raça:'} />
              <Input placeholder={'*Peso:'} />
              <Input placeholder={'*Idade:'} />
              <Input placeholder={'Tipo Sangúineo:'}/>
              <Input placeholder={'Lorem Ipsum:'} />
            </TextBox>

            <Buttons>
              <PrimaryButton color="cat">Próximo</PrimaryButton>
              <SecundaryButton>Voltar</SecundaryButton>
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
