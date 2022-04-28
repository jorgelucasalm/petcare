import { useState } from 'react';

import Logo from '../../assets/img/logo-petcare.png';
import Dog from '../../assets/img/welcome-dog.png';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import SecundaryButton from '../../components/SecundaryButton';
import Footer from '../../components/Footer';
import { Container, Navbar, BlueSection, Buttons, WhiteSection, RegisterButton } from './style';
import Patient from './components/patient';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


function Cadastro() {
  const [showModal, setShowModal] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().max(40, "Seu nome não pode ser tão grande!").required('Campo obrigatório'),
    cpf: yup.string().min(11, 'CPF invalido!').max(11, 'CPF invalido!').required('Campo obrigatório'),
    adress: yup.string().required('Campo obrigatório'),
    phone: yup.string().min(11, 'Digite um número valido!').max(13, 'Digite um número valido!').required('Campo obrigatório'),
    email: yup.string().email('Insira um e-mail valido!').required('Campo obrigatório'),
  })

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

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
            <span>{errors.name?.message}</span>
            <input placeholder='*CPF:' type='text' {...register('cpf')} />
            <span>{errors.cpf?.message}</span>
            <input placeholder='*Endereço:' type='text' {...register('adress')} />
            <span>{errors.adress?.message}</span>
            <input placeholder='*Telefone:' type='text' {...register('phone')} />
            <span>{errors.phone?.message}</span>
            <input placeholder='*E-mail:' type='email' {...register('email')} />
            <span>{errors.email?.message}</span>
          </div>

          <Buttons>
            <RegisterButton type='submit'>Cadastrar</RegisterButton>
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
