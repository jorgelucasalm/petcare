import Logo from "../../assets/img/logo-petcare.png" 
import Dog from "../../assets/img/welcome-dog.png"

import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import SecundaryButton from "../../components/SecundaryButton";
import { BlueSection, Buttons, TextBox, WhiteSection } from "../Login/style";

function Responsavel (){
    return (
        <>
            <Container>
                <Navbar />
                <WhiteSection>
                    <header>
                        <h2>Cadastro</h2>
                        <p>Responsável</p>
                    </header>

                    <TextBox>
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </TextBox>

                    <Buttons>
                        <PrimaryButton>Próximo</PrimaryButton>
                        <SecundaryButton>Já tenho conta</SecundaryButton>
                    </Buttons>
                </WhiteSection>

                <BlueSection>
                    <p>Bem vindo ao</p>
                    <img src={ Logo } alt="logo-petcare"/>
                    <img src={ Dog } alt="mascote-canino"/>
                </BlueSection>
            </Container>
        </>
    )
}

export default Responsavel;