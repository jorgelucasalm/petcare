import PrimaryButton from '../../../../../../components/PrimaryButton';
import SecundaryButton from '../../../../../../components/SecundaryButton';
import Dropdown from '../../../../../../components/Dropdown';

import {
  Container,
  Card,
  DropdownContent,
  Id,
  CheckContent,
  Buttons,
} from './style';

function ExamSchedule() {
  return (
    <Container>
      <Card>
        <header>
          <h2>Exames</h2>
          <p>
            Sua solicitação pode levar até 48h para ser aprovada por um de
            nossos atendentes.
          </p>
        </header>

        <DropdownContent>
          <p>Categoria:</p>
          <Id>
            <p>Exames</p>
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

        {/* Condicional */}

        <CheckContent>
          <p>Tipo de exame:</p>
          <div>
            <input type={'checkbox'} id={'U'} name={'choice'} />
            <label for={'U'}>Urina</label>
          </div>

          <div>
            <input type={'checkbox'} id={'S'} name={'choice'} />
            <label for={'S'}>Sangue</label>
          </div>

          <div>
            <input type={'checkbox'} id={'L'} name={'choice'} />
            <label for={'L'}>Lorem</label>
          </div>

          <div>
            <input type={'checkbox'} id={'I'} name={'choice'} />
            <label for={'I'}>Ipsum</label>
          </div>
        </CheckContent>

        <Buttons>
          <PrimaryButton color={''}>Solicitar</PrimaryButton>
          <SecundaryButton color={''}>Cancelar</SecundaryButton>
        </Buttons>
      </Card>
    </Container>
  );
}

export default ExamSchedule;
