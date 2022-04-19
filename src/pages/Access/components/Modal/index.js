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
              <Input placeholder={'*Nome de usuário:'} />
              <Input placeholder={'*Senha:'} />
              <Input placeholder={'*E-mail válido:'} />
              <Input placeholder={'*Confirmar e-mail:'} />
            </TextBox>

            <Buttons>
              <PrimaryButton>Próximo</PrimaryButton>
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
