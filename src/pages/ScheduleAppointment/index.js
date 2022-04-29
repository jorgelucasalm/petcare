import { Container, DropdownContent, Dropdown, Radio } from "./style";

function ScheduleAppointment() {
  return (
    <>
      <Container>
        <header>
          <h2>Nova Consulta</h2>
          <p>
            Sua solicitação pode levar até 48h para ser aprovada por um de
            nossos atendentes.
          </p>
        </header>

        <DropdownContent>
          <Dropdown>
            <p>Categoria do Agendamento</p>
            <div>Dropdown</div>
          </Dropdown>

          <Dropdown>
            <p>Data para o atendimento:</p>
            <div>Dropdown</div>
          </Dropdown>

          <Dropdown>
            <p>Horário para o atendimento:</p>
            <div>Dropdown</div>
          </Dropdown>
        </DropdownContent>

        <div>
          <p>Tratamento contínuo?</p>
          <Radio>
            <input type={'radio'} id={'Y'} name={'choice'} />
            <label for={'Y'}>Sim</label>
          </Radio>

          <Radio>
            <input type={'radio'} id={'N'} name={'choice'} />
            <label for={'N'}>Não</label>
          </Radio>
        </div>
      </Container>
    </>
  );
}

export default ScheduleAppointment;
