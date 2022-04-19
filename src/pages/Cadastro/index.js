import { useState } from 'react';

import Logo from '../../assets/img/logo-petcare.png';
import Dog from '../../assets/img/welcome-dog.png';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import SecundaryButton from '../../components/SecundaryButton';
import Footer from '../../components/Footer';
import { Container, Navbar, BlueSection, Buttons, WhiteSection } from './style';
import Patient from './components/patient';


function Cadastro() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = (e) => {
    if (e.classList.contains('modal')) {
      setShowModal(false);
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <WhiteSection>
          <header>
            <h2>Cadastro</h2>
            <p>Responsável</p>
          </header>

          <div>
            <Input placeholder={'*Nome:'} />
            <Input placeholder={'*CPF:'} />
            <Input placeholder={'*Endereço:'} />
            <Input placeholder={'*Telefone:'} />
            <Input placeholder={'*E-mail:'} />
          </div>

          <Buttons>
            <PrimaryButton>Próximo</PrimaryButton>
            <SecundaryButton onClick={e => { setShowModal(true) }} >Já tenho conta</SecundaryButton>
          </Buttons>
        </WhiteSection>

        <BlueSection>
          <p>Bem vindo ao</p>
          <img src={Logo} alt="logo-petcare" />
          <img src={Dog} alt="mascote-canino" />
        </BlueSection>

        <Patient showModal={showModal} closeModal={closeModal} />

      </Container>
      <Footer />
    </>
  );
}

export default Cadastro;
