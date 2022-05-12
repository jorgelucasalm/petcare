import PrimaryButton from '../../../../../../components/PrimaryButton';
import SecundaryButton from '../../../../../../components/SecundaryButton';
import Dropdown from '../../../../../../components/Dropdown';

import { Container, Card, DropdownContent, Id, RadioContent, Condition, Buttons} from './style';

function ScheduleAppointment() {
  return (
    <Container>
      <Card>
        <header>
          <h2>Nova Consulta</h2>
          <p>
            Sua solicitação pode levar até 48h para ser aprovada por um de
            nossos atendentes.
          </p>
        </header>

        <DropdownContent>
          <p>Categoria:</p>
          <Id>
            <p>Consulta de rotina</p>
          </Id>

          <p>Data para o atendimento:</p>
          <Dropdown>
            <option>Teste 1</option>
            <option>Teste 2</option>
            <option>Teste 3</option>
          </Dropdown>

          <p>Horário para o atendimento:</p>
          <Dropdown>
            <option>Teste 1</option>
            <option>Teste 2</option>
            <option>Teste 3</option>
          </Dropdown>
        </DropdownContent>

        <RadioContent>
          <p>Tratamento contínuo?</p>
          <div>
            <input type={'radio'} id={'Y'} name={'choice'} />
            <label for={'Y'}>Sim</label>
          </div>

          <div>
            <input type={'radio'} id={'N'} name={'choice'} />
            <label for={'N'}>Não</label>
          </div>
        </RadioContent>

        {/* Condicional */}

        <Condition>
          <div>
            <h3>Médico:</h3>

            <p>Selecione o especialista anterior:</p>
            <Dropdown>
              <option>Teste 1</option>
              <option>Teste 2</option>
              <option>Teste 3</option>
            </Dropdown>
          </div>

          <div>
            <h3>Autorização:</h3>
            <RadioContent>
              <p>
                Caso haja um horário mais próximo, você autoriza a marcação para
                outro profissional?
              </p>
              <div>
                <input type={'checkbox'} id={'Y'} name={'choice'} />
                <label for={'Y'}>Sim</label>
              </div>
            </RadioContent>
          </div>
        </Condition>

        <Buttons>
          <PrimaryButton color={''}>Solicitar</PrimaryButton>
          <SecundaryButton color={''}>Cancelar</SecundaryButton>
        </Buttons>
      </Card>
    </Container>
  );
}

export default ScheduleAppointment;
