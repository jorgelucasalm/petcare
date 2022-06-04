import PrimaryButton from '../../components/PrimaryButton';
import { Container, Card, TextBox, Buttons } from './style';

function Guidelines() {
  return (
    <>
      <Container>
        <Card>
          <header>
            <h2>ATENÇÃO</h2>
          </header>

          <TextBox>
            <p>
              No dia da consulta leve <span>documento de identificação</span>.
            </p>
            <p>Só será permitida a entrada na clínica com o uso de máscara.</p>
            <p>
              Em casos de cancelamento, favor entrar em contato com
              antecedência.
            </p>
            <p>
              Em casos de reagendamento, será necessário cancelar o atendimento
              vigente.
            </p>
          </TextBox>

          <Buttons>
            <PrimaryButton color={""}>Entendi</PrimaryButton>
          </Buttons>
        </Card>
      </Container>
    </>
  );
}

export default Guidelines;
