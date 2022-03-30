import Logo from "../../assets/img/logo-petcare.png" 
import Cat from "../../assets/img/welcome-cat.png"
import PrimaryButton from "../../components/PrimaryButton";
import SecundaryButton from "../../components/SecundaryButton";
import Input from "../../components/Input";

import {
  Navbar,
  Container,
  BlueSection,
  WhiteSection,
  TextBox,
  Buttons,
  Footer
} from "./style"

function Login() {
  return (
    <>
      <Navbar></Navbar>
      <Container>

        <BlueSection>
          <p>Bem vindo ao</p>
          <img src={ Logo } alt="logo-petcare"/>
          <img src={ Cat } alt="mascote-felino"/>
        </BlueSection>

        <WhiteSection>
          <PrimaryButton>Entrar com Google</PrimaryButton>
          <p>ou</p>

          <TextBox>
            <Input placeholder="user" />
            <Input />

            <a href="#">Esqueci a senha</a>
          </TextBox>

          <Buttons>
            <PrimaryButton>Entrar</PrimaryButton>
            <SecundaryButton>Criar conta</SecundaryButton>
          </Buttons>
        </WhiteSection>
      </Container>

      <Footer>&copy; Coc</Footer>
    </>
  );
}

export default Login;
