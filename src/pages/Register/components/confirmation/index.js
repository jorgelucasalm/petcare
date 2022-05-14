// import DogIcon from '../../../../assets/img/icon-home-dog.png';
import CatIcon from '../../../../assets/img/icon-home-cat.png';

//import InfoBox from '../../../../components/InfoBox';
import PrimaryButton from '../../../../components/PrimaryButton';
import ProgressBar from '../../../../components/ProgressBar';
import { createUser } from '../../../../service/serviceUser'

import { Container, Card, TextBox, Selector, Buttons } from './style';

function Confirmation({ showModal, closeModal, dados }, props) {
  const validation = () => {
    console.log(dados)
    const user = {
      nome: dados.user.name,
      nick: dados.login.user,
      cpf: dados.user.cpf,
      endereco: dados.user.adress,
      telefone: dados.user.phone,
      email: dados.user.email,
      senha: dados.login.password,
      email_recuperacao: dados.user.email
    }
    const pet = {
      id: "default",
      cpf_responsavel: dados.user.cpf,
      nome: dados.pet.nome,
      raca: dados.pet.raca,
      animal: dados.pet.animal,
      peso: dados.pet.peso,
      idade: dados.pet.idade,
      tipo_sanguineo: dados.pet.tipo_sanguineo
    }
    createUser(user, pet)
  }
  return (
    <>
      {showModal ? (
        <Container
          className="modal"
          onClick={e => { e.target.className.includes('modal') && closeModal() }}
        >
          <Card color={'cat'}>
            <header>
              <h2>Cadastro concluído</h2>
              <p>Acesso liberado</p>
              <ProgressBar size={'100'} />
            </header>

            <Selector>
              <img src={CatIcon} alt='Imagem de gato pulsando' />
            </Selector>

            <TextBox>
              <h3>
                Seja bem-vindo, <span>Marley</span>!
              </h3>
              <p>(Nº 123.456)</p>
            </TextBox>

            <Buttons>
              {/* <PrimaryButton onClick={onSubmit}>Tela inicial</PrimaryButton> */}
              <PrimaryButton onClick={validation}>Tela inicial</PrimaryButton>
            </Buttons>
          </Card>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Confirmation;
