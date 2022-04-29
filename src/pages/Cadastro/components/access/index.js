import Input from '../../../../components/Input/style';
import PrimaryButton from '../../../../components/PrimaryButton';
import SecundaryButton from '../../../../components/SecundaryButton';
import ProgressBar from '../../../../components/ProgressBar';

import { Container, Card, TextBox, Buttons } from './style';

function Access({ showModal, closeModal, onSubmit }) {
  return (
    <>
      {showModal ? (
        <Container
          className="modal"
          onClick={e => { e.target.className.includes('modal') && closeModal() }}
        >
          <Card>
            <header>
              <h2>Cadastro</h2>
              <p>Acesso</p>
              <ProgressBar size={'75'} />
            </header>

            <TextBox>
              <Input placeholder={'*Nome de usuário:'} />
              <Input placeholder={'*E-mail:'} />
              <Input placeholder={'*Senha:'} />
              <Input placeholder={'*Confirmação de senha:'} />
            </TextBox>

            <Buttons>
              <PrimaryButton color={'dog'} onClick={onSubmit}>Próximo</PrimaryButton>
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

export default Access;
