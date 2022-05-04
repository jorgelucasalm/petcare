import SecundaryButton from '../../components/SecundaryButton';
import PatientButton from './components/PatientButton';

import Clock from '../../assets/img/clock.svg';
import Check from '../../assets/img/check.svg';
import Cancel from '../../assets/img/cancel.svg';

import Dog from '../../assets/img/MicroIcon-dog.svg';
import Cat from '../../assets/img/MicroIcon-cat.svg';

import { Container, Card, Content, TextBox, Buttons } from './style';

function Agenda() {
  return (
    <>
      <Container>
        <Card>
          <header>
            <h2>Agenda:</h2>
          </header>

          <Content>
            Dropdown
            <PatientButton>
              <div>
                <img src={Dog} />

                <TextBox>
                  <h3>Nome do Paciente</h3>
                  <p>000.000</p>
                </TextBox>
              </div>

              <p>12/02</p>
            </PatientButton>

            <PatientButton>
              <div>
                <img src={Cat} />

                <TextBox>
                  <h3>Nome do Paciente</h3>
                  <p>000.000</p>
                </TextBox>
              </div>

              <p>12/02</p>
            </PatientButton>

            <PatientButton>
              <div>
                <img src={Dog} />

                <TextBox>
                  <h3>Nome do Paciente</h3>
                  <p>000.000</p>
                </TextBox>
              </div>

              <p>12/02</p>
            </PatientButton>
            
            <PatientButton>
              <div>
                <img src={Cat} />

                <TextBox>
                  <h3>Nome do Paciente</h3>
                  <p>000.000</p>
                </TextBox>
              </div>

              <p>12/02</p>
            </PatientButton>
          </Content>

          <Buttons>
            <SecundaryButton>Voltar</SecundaryButton>
          </Buttons>
        </Card>
      </Container>
    </>
  );
}

export default Agenda;
