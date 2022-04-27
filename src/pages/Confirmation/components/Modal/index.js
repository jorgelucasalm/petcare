import { useEffect } from 'react';
// import DogIcon from '../../../../assets/img/icon-home-dog.png';
import CatIcon from '../../../../assets/img/icon-home-cat.png';

//import InfoBox from '../../../../components/InfoBox';
import PrimaryButton from '../../../../components/PrimaryButton';

import {
  Container,
  Card,
  TextBox,
  Selector,
  Buttons,
} from './style';

function Modal({ showModal, closeModal }, props) {
  return (
    <>
      {showModal ? (
        <Container
          className="modal"
          onClick={(e) => {
            closeModal(e.target);
          }}
        >
          <Card color={'cat'}>
            <header>
              <h2>Cadastro concluído</h2>
              <p>Acesso liberado</p>
              <img />
            </header>

            <Selector>
              <img src={CatIcon} />
            </Selector>

            <TextBox color={'cat'}>
              <h3>Seja bem-vindo, <span>Marley</span>!</h3>
              <p>(Nº 123.456)</p>
            </TextBox>

            <Buttons>
              <PrimaryButton>Tela inicial</PrimaryButton>
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
