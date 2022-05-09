import VacineButton from './components/VacineButton';
import SecundaryButton from '../../components/SecundaryButton';

import Clock from '../../assets/img/clock.svg';
import Check from '../../assets/img/check.svg';
import Retorno from '../../assets/img/retorno.svg';
import Cancel from '../../assets/img/cancel.svg';

import { Container, Card, Content, Buttons } from './style';

function VacineCard() {
  return (
    <Container>
      <Card>
        <header>
          <h2>Cartão de vacina</h2>
          <p>lorem ipsum</p>
        </header>

        <Content>
          <VacineButton color="clock" alt="icone-relógio">
            <span>
              <img src={Clock} />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>

          <VacineButton color="check" alt="icone-check">
            <span>
              <img src={Check} />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>

          <VacineButton color="cancel">
            <span>
              <img src={Cancel} alt="icone-cancelar" />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>

          <VacineButton color="return" alt="icone-retorno">
            <span>
              <img src={Retorno} />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>

          <VacineButton color="clock" alt="icone-relógio">
            <span>
              <img src={Clock} />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>

          <VacineButton color="check" alt="icone-check">
            <span>
              <img src={Check} />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>

          <VacineButton color="cancel">
            <span>
              <img src={Cancel} alt="icone-cancelar" />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>

          <VacineButton color="return" alt="icone-retorno">
            <span>
              <img src={Retorno} />
            </span>

            <p>Vacina Lorem</p>
          </VacineButton>
        </Content>

        <Buttons>
          <SecundaryButton>Voltar</SecundaryButton>
        </Buttons>
      </Card>
    </Container>
  );
}

export default VacineCard;
