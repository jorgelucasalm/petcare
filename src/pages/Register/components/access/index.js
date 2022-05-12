import Input from '../../../../components/Input/style';
import PrimaryButton from '../../../../components/PrimaryButton';
import SecundaryButton from '../../../../components/SecundaryButton';
import ProgressBar from '../ProgressBar';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Card, TextBox, Buttons } from './style';

function Access({ showModal, closeModal, onSubmit, back }) {

  const schema = yup.object().shape({
    user: yup.string().matches(/^[a-zA-Z0-9]+$/, "Não pode possuir caracteres especiais!").max(40, "Seu nome não pode ser tão grande!").required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    passwordConfirmation: yup.string().required('Campo obrigatório')
      .oneOf([yup.ref('password')], 'Senhas não correspondentes!'),
  })

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

  const validation = (dados) => {
    dados !== undefined && onSubmit("login", dados)
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
              <p>Acesso</p>
              <ProgressBar size={'75'} />
            </header>

            <TextBox onSubmit={handleSubmit(validation)}>
              <input placeholder='*Nome de usuário:' type='text' {...register('user')} />
              <span>{errors.user?.message}</span>
              <input placeholder='*Senha:' type='password' {...register('password')} />
              <span>{errors.password?.message}</span>
              <input placeholder='*Confirmação de senha:' type='password' {...register('passwordConfirmation')} />
              <span>{errors.passwordConfirmation?.message}</span>
              <Buttons>
                <PrimaryButton type="submit">Próximo</PrimaryButton>
                <SecundaryButton onClick={back}>Voltar</SecundaryButton>
              </Buttons>
            </TextBox>
          </Card>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Access;
