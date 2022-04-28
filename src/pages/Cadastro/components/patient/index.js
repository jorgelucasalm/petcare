import { useEffect } from 'react';
import Input from '../../../../components/Input';
import PrimaryButton from '../../../../components/PrimaryButton';
import SecundaryButton from '../../../../components/SecundaryButton';
import { Container, Card, TextBox, Buttons } from './style';

function Patient({ showModal, closeModal }) {
  return (
    <>
      {showModal ? (
        <Container className="modal" onClick={e => { e.target.className.includes('modal') && closeModal() }}>
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
              <Input placeholder={'Tipo Sangúineo:'} />
              <Input placeholder={'Lorem Ipsum:'} />
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

export default Patient;
