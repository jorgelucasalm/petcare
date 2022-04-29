import { useState } from 'react';
import DogIcon from '../../../../assets/img/icon-home-dog.png';
import CatIcon from '../../../../assets/img/icon-home-cat.png';

//import InfoBox from '../../../../components/InfoBox';
import PrimaryButton from '../../../../components/PrimaryButton';
import ProgressBar from '../../../../components/ProgressBar';

import {
  Container,
  Card,
  InfoBox,
  SelectorContainer,
  Selector,
  Buttons,
} from './style';

function Modal({ showModal, closeModal, onSubmit }, props) {
  const [specie, setSpecie] = useState('')
  const [showModalPacient, setShowModalPacient] = useState(false);

  const validationSelected = () => {
    specie !== '' && onSubmit(specie)
  }

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
              <p>Espécies</p>
              <ProgressBar size={'25'} />
            </header>

            <InfoBox color="alert">
              <h3>No que isso interfere?</h3>
              <p>A página é customizada de acordo com a espécie do animal.</p>
            </InfoBox>

            <SelectorContainer>
              <Selector color="dog" onClick={() => setSpecie('dog')}>
                <img src={DogIcon} alt='imagem de cachorro' />
                <p>Canino</p>
              </Selector>

              <Selector color="cat" onClick={() => setSpecie('cat')}>
                <img src={CatIcon} alt='imagem de gato' />
                <p>Felino</p>
              </Selector>
            </SelectorContainer>

            <Buttons>
              <PrimaryButton onClick={validationSelected}>Próximo</PrimaryButton>
            </Buttons>
          </Card>
        </Container>
      ) : (
        <></>
      )
      }
    </>
  );
}

export default Modal;
