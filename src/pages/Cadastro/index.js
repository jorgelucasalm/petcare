import { useState } from 'react';

import Logo from '../../assets/img/logo-petcare.png';
import Dog from '../../assets/img/welcome-dog.png';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import SecundaryButton from '../../components/SecundaryButton';
import Footer from '../../components/Footer';
import { Container, Navbar, BlueSection, Buttons, WhiteSection } from './style';
import Patient from './components/patient';
import { useForm } from 'react-hook-form';


function Cadastro() {
  const { register, handleSubmit, errors } = useForm();

  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => console.log(data)

  const closeModal = (e) => {
    if (e.classList.contains('modal')) {
      setShowModal(false);
    }
  }

  const openModal = (e) => {
    e.preventDefault()
    setShowModal(true);
  }

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <WhiteSection onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h2>Cadastro</h2>
            <p>Responsável</p>
          </header>

          <div>
            <input placeholder='*Nome:' type='text' {...register('name')} />
            <input placeholder='*CPF:' type='text' {...register('cpf')} />
            <input placeholder='*Endereço:' type='text' {...register('adress')} />
            <input placeholder='*Telefone:' type='text' {...register('phone')} />
            <input placeholder='*E-mail:' type='email' {...register('email')} />
          </div>

          <Buttons>
            <input type='submit' />
            <SecundaryButton>Já tenho conta</SecundaryButton>
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
