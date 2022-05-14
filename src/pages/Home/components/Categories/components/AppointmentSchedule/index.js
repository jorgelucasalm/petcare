import PrimaryButton from '../../../../../../components/PrimaryButton';
import SecundaryButton from '../../../../../../components/SecundaryButton';
import Dropdown from '../../../../../../components/Dropdown';
import { createAgendamento } from '../../../../../../service/serviceAgendamento';
import { Container, Card, DropdownContent, Id, RadioContent, Condition, Buttons } from './style';
import { useRef, useState } from 'react';

function AppointmentSchedule({ showModal, setShowModal }) {
  const checked = useRef(null)

  const [categoria, setCategoria] = useState('Categoria de rotina')
  const [date, setData] = useState('')
  const [horario, setHorario] = useState('09:00')
  const [tratamentoC, setTratamentoC] = useState(false)
  const [medico, setMedico] = useState('Jorge Lucas')

  const validation = () => {
    const autorizacao = checked.current.checked

    if (categoria !== '' && date !== '' && horario !== '' && tratamentoC !== '' && medico !== '') {
      const data = {
        id: "default",
        id_pet: 1,
        categoria: categoria,
        data: date,
        turno: horario,
        tratamento_continuo: tratamentoC,
        nome_medico: medico,
        autorizacao: autorizacao === 'true' ? true : false,
        motivacao: '',
        numero_dose: 0,
        uso_medicacao: false,
        medicacao: '',
        termino: '',
        tipo_exame: '',
      }
      createAgendamento(data)
    }
  }
  return (<>
    {showModal && <Container className="modal"
      onClick={e => { e.target.className.includes('modal') && setShowModal(false) }}>
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
          <input onChange={(e) => { setData(e.target.value) }} id="date" type="date" name="stockDate" min={new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + new Date().getDate()} ></input>
          {/* <Dropdown>
            <option>11</option>
            <option>Teste 2</option>
            <option>Teste 3</option>
            <option>Teste 1</option>
            <option>Teste 2</option>
            <option>Teste 3</option>
            <option>Teste 1</option>
            <option>Teste 2</option>
            <option>Teste 3</option>
          </Dropdown> */}

          <p>Horário para o atendimento:</p>
          <Dropdown onChange={(e) => { setHorario(e.target.value) }}>
            <option value={'09:00'}>09:00</option>
            <option value={'09:30'}>09:30</option>
            <option value={'10:00'}>10:00</option>
            <option value={'10:30'}>10:30</option>
            <option value={'11:00'}>11:00</option>
            <option value={'11:30'}>11:30</option>
          </Dropdown>
        </DropdownContent>

        <RadioContent>
          <p>Tratamento contínuo?</p>
          <div>
            <input type={'radio'} id={'yes'} name={'choice'} onChange={() => setTratamentoC(true)} />
            <label for={'yes'}>Sim</label>
          </div>

          <div>
            <input type={'radio'} id={'no'} name={'choice'} onChange={() => setTratamentoC(false)} />
            <label for={'no'}>Não</label>
          </div>
        </RadioContent>

        {/* Condicional */}

        <Condition>
          <div>
            <h3>Médico:</h3>

            <p>Selecione o especialista anterior:</p>
            <Dropdown onChange={(e) => { setMedico(e.target.value) }}>
              <option>Jorge Lucas</option>
              <option>Jessica Leal</option>
              <option>Danniely Egito</option>
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
                <input type={'checkbox'} id={'Y'} name={'choice'} ref={checked} />
                <label for={'Y'}>Sim</label>
              </div>
            </RadioContent>
          </div>
        </Condition>

        <Buttons>
          <PrimaryButton color={''} onClick={validation}>Solicitar</PrimaryButton>
          <SecundaryButton color={''}>Cancelar</SecundaryButton>
        </Buttons>
      </Card>
    </Container>}
  </>
  );
}

export default AppointmentSchedule;
