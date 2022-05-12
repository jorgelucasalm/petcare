import ConfigButton from './components/ConfigButton';
import Perfil from '../../assets/img/icon-home-dog.png';

import SecundaryButton from '../../components/SecundaryButton';

import Clock from '../../assets/img/clock.svg';
import Check from '../../assets/img/check.svg';
import Retorno from '../../assets/img/retorno.svg';
import Cancel from '../../assets/img/cancel.svg';

import { Container, Card, ConfigContent, Buttons } from './style';


function Settings() {
  return (
    <>
      <Container>
      <Card>
        <header>
          <h2>Configurações</h2>
          <p>(Marlena Ferreira)</p>
        </header>

        <ConfigContent>
          <ConfigButton>
              <p>Paciente</p>
          </ConfigButton>

          <ConfigButton>
              <p>Responsável</p>
          </ConfigButton>

          <ConfigButton>
              <p>Senha</p>
          </ConfigButton>

          <ConfigButton>
              <p>Faq</p>
          </ConfigButton>

          <ConfigButton>
              <p>Lorem Ipsum</p>
          </ConfigButton>

          <ConfigButton color='alert'>
              <p>Log Off</p>
          </ConfigButton>
        </ConfigContent>

        <Buttons>
          <SecundaryButton>Voltar</SecundaryButton>
        </Buttons>
      </Card>
      </Container>
    </>
  );
}

export default Settings;
