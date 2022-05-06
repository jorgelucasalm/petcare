import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecundaryButton';
import Item from './components/Item';
import { Container, Card } from './style';

function Categories() {
  return (
    <Container>
      <Card>
        <header>
          <h2>Confirmação</h2>
          <p>Revise seus dados com atenção</p>
        </header>
        <div>
          <Item>
            <h3>Nº de identificação:</h3>
            <p>123.456-00</p>
          </Item>
          <Item>
            <h3>Requisição:</h3>
            <p>CONSULTA</p>
          </Item>
          <Item>
            <h3>Data selecionada:</h3>
            <p>12/01 - MANHÃ</p>
          </Item>
          <Item>
            <h3>Tratamento?</h3>
            <p>NÃO</p>
          </Item>
          <Item>
            <h3>Médico desejado:</h3>
            <p>DRA. CAMILA GONÇALVEZ</p>
          </Item>
          <Item>
            <h3>Autoriza realocação de horários?</h3>
            <p>NÃO</p>
          </Item>
          <Item>
            <h3>Descrição:</h3>
            <p>LOREM IPSUM DOLOR</p>
          </Item>
        </div>
        <PrimaryButton>Confirmar</PrimaryButton>
        <SecondaryButton>Voltar</SecondaryButton>
      </Card>
    </Container>
  );
}

export default Categories;
