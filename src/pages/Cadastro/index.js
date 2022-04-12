import Logo from '../../assets/img/logo-petcare.png';
import Dog from '../../assets/img/welcome-dog.png';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import SecundaryButton from '../../components/SecundaryButton';
import Footer from '../../components/Footer';
import { Container, Navbar, BlueSection, Buttons, WhiteSection } from './style';

function Cadastro() {
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
            <SecundaryButton>Já tenho conta</SecundaryButton>
          </Buttons>
        </WhiteSection>

        <BlueSection>
          <p>Bem vindo ao</p>
          <img src={Logo} alt="logo-petcare" />
          <img src={Dog} alt="mascote-canino" />
        </BlueSection>
      </Container>
      <Footer />
    </>
  );
}

export default Cadastro;