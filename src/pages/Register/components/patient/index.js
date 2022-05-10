import Input from '../../../../components/Input';
import PrimaryButton from '../../../../components/PrimaryButton';
import ProgressBar from '../../../../components/ProgressBar';
import SecundaryButton from '../../../../components/SecundaryButton';
import { Container, Card, TextBox, Buttons } from './style';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';

function Patient({ showModal, closeModal, back, onSubmit }) {

  const schema = yup.object().shape({
    nome_p: yup.string().matches(/^[a-zA-Z]+$/, "Este campo deve possuir apenas letras!").max(40, "Seu nome não pode ser tão grande!").required('Campo obrigatório'),
    raca_p: yup.string().matches(/^[a-zA-Z]+$/, "Este campo deve possuir apenas letras!").max(40, "A raça não pode ser tão grande!").required('Campo obrigatório'),
    peso_p: yup.string().min(1, 'Digite um valor valido!').required('Campo obrigatório'),
    idade_p: yup.string().min(1, 'Digite uma idade valida!').required('Campo obrigatório'),
    tpSang_p: yup.string().required('Campo obrigatório')
  })

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

  const validationSelected = (dados) => {
    dados.tpSang_p !== "Null" && onSubmit("pet-dados", dados)
  }

  return (
    <>
      {showModal ? (
        <Container className="modal" onClick={e => { e.target.className.includes('modal') && closeModal() }}>
          <Card>
            <header>
              <h2>Cadastro</h2>
              <p>Paciente</p>
              <ProgressBar size={'50'} />
            </header>

            <TextBox onSubmit={handleSubmit(validationSelected)}>
              <input type='text' placeholder={'*Nome:'}  {...register("nome_p")} />
              <span>{errors.nome_p?.message}</span>
              <input type='text' placeholder={'*Raça:'}  {...register("raca_p")} />
              <span>{errors.raca_p?.message}</span>
              <input type='number' step="0.01" placeholder={'*Peso: (kg)'}  {...register("peso_p")} />
              <span>{errors.peso_p?.message}</span>
              <input type='number' placeholder={'*Idade:'}  {...register("idade_p")} />
              <span>{errors.idade_p?.message}</span>
              <select type='text' defaultValue="1" placeholder={'Tipo Sangúineo:'} {...register("tpSang_p")}>
                <option value="1" disabled>Seleciona uma opção</option>
                <option value="a-p">A+</option>
                <option value="a-n">A-</option>
                <option value="b-p">B+</option>
                <option value="b-n">B-</option>
                <option value="ab-p">AB+</option>
                <option value="ab-n">AB-</option>
                <option value="o-p">O+</option>
                <option value="o-n">O-</option>
              </select>
              <span>{errors.tpSang_p?.message}</span>
              {console.log(errors.tpSang_p)}
              {/* <input placeholder={'Lorem Ipsum:'} /> */}

              <Buttons>
                <PrimaryButton type='submit'>Próximo</PrimaryButton>
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

export default Patient;
