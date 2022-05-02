import { useState } from 'react';

import Logo from '../../assets/img/logo-petcare.png';
import Dog from '../../assets/img/welcome-dog.png';
import SecundaryButton from '../../components/SecundaryButton';
import Footer from '../../components/Footer';
import { Container, Navbar, BlueSection, Buttons, WhiteSection, RegisterButton } from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


import ModalSpecies from './components/species'
import ModalConfirmation from './components/confirmation'
import ModalAccess from './components/access'
import ModalPatient from './components/patient'


function Cadastro() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [userRegister, setUserRegister] = useState([]);

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

  const onSubmit = (dados) => {
    setUserRegister(dados)
    setIndex(index === 0 ? 1 : index)
    handleModal()
    console.log(index, showModal)
  }

  const handleModal = (data) => {
    setShowModal(!showModal);
  }

  const saveData = (e) => {
    setIndex(index + 1)
    console.log(e)
  }

  const backModal = () => {
    setIndex(index - 1)
  }

  return (
    <>
      <Navbar />
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

        <ModalSpecies showModal={showModal && index === 1} closeModal={handleModal} onSubmit={saveData} />
        <ModalPatient showModal={showModal && index === 2} closeModal={handleModal} onSubmit={saveData} back={backModal} />
        <ModalAccess showModal={showModal && index === 3} closeModal={handleModal} onSubmit={saveData} back={backModal} />
        <ModalConfirmation showModal={showModal && index === 4} closeModal={handleModal} onSubmit={saveData} back={backModal} />

      </Container>
      <Footer />
    </>
  );
}

export default Cadastro;
