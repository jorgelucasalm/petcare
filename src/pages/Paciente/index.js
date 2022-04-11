import Input from "../../components/Input/style";
import PrimaryButton from "../../components/PrimaryButton";
import SecundaryButton from "../../components/SecundaryButton";
import { Container, Card, TextBox, Buttons } from "./style";

function Paciente () {
    return (
        <Container>
            <Card>
                <header>
                    <h2>Cadastro</h2>
                    <p>Paciente</p>

                    <img />
                </header>

                <TextBox>
                    <Input />
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
            </Card>
        </Container>
    )
} 

export default Paciente;