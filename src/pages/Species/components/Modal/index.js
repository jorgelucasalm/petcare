import { useEffect } from 'react';
import DogIcon from '../../../../assets/img/icon-home-dog.png'
import CatIcon from '../../../../assets/img/icon-home-cat.png'

//import InfoBox from '../../../../components/InfoBox';
import PrimaryButton from '../../../../components/PrimaryButton';
import SecundaryButton from '../../../../components/SecundaryButton';
import ProgressBar from '../../../../components/ProgressBar';

import { Container, Card, InfoBox, SelectorContainer, Selector, Buttons } from './style';

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
          <Card>
            <header>
              <h2>Cadastro</h2>
              <p>Espécies</p>
              <ProgressBar size={''} />
            </header>

            <InfoBox color="alert">
              <h3>No que isso interfere?</h3>
              <p>A página é customizada de acordo com a espécie do animal.</p>
            </InfoBox>

            <SelectorContainer>
              <Selector color='dog'>
                <img src={DogIcon}/>
                <p>Canino</p>
              </Selector>

              <Selector color='cat'>
                <img src={CatIcon}/>
                <p>Felino</p>
              </Selector>
            </SelectorContainer>

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
