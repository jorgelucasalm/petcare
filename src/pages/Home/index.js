import PrimaryButton from "../../components/PrimaryButton";
import SecundaryButton from "../../components/SecundaryButton";
import Input from "../../components/Input";

import {
  Navbar,
  Container, 
  BlueSection, 
  WhiteSection,
  TextBox, 
  Footer
} from "../Home/style"


function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Container>

        <BlueSection>
          <p>Bem vindo ao</p>
          <img />
          <img />
        </BlueSection>

        <WhiteSection>
          <PrimaryButton>Entrar com Google</PrimaryButton>
          <p>ou</p>

          <TextBox>
            <Input ></Input>
            <Input ></Input>

            <a>Esqueci a senha</a>
          </TextBox>

          <div>
            <PrimaryButton>Entrar</PrimaryButton>
            <SecundaryButton>Criar conta</SecundaryButton>
          </div>
        </WhiteSection>
      </Container>

      <Footer>&copy; Coc</Footer>
    </>
  );
}

export default Home;
