// import DogIcon from '../../../../assets/img/icon-home-dog.png';
import CatIcon from '../../../../assets/img/icon-home-cat.png';

//import InfoBox from '../../../../components/InfoBox';
import PrimaryButton from '../../../../components/PrimaryButton';
import ProgressBar from '../../../../components/ProgressBar';
import { createUser } from '../../../../service/serviceUser'
import { Link } from 'react-router-dom';

import { Container, Card, TextBox, Selector, Buttons } from './style';

function Confirmation({ showModal, closeModal, dados }, props) {


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
              <Link to="/home">
                <PrimaryButton to="/home">Tela inicial</PrimaryButton>
              </Link>
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
