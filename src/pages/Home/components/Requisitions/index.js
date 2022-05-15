import { useEffect, useState } from 'react';
import Clock from '../../../../assets/img/clock.svg';
import SecundaryButton from '../../../../components/SecundaryButton';
import { listarAgenda } from '../../../../service/serviceAgendamento';
import ModalDetalhes from './components/ModalDetalhes';
import RequisitonButton from './components/RequisitionButton';
import { Buttons, Card, Container, RequisitionContent } from './style';

function Requisitions({ showModal, setShowModal }) {
  const [dados, setDados] = useState([])
  const [item, setItem] = useState({})
  const [modalDetalhes, setModalDetalhes] = useState(false)

  useEffect(() => {
    listarAgenda((res) => {
      setDados(res)
    })
  }, [showModal])

  const openDetalhes = (agendamento) => {
    const newAgendamento = agendamento
    newAgendamento.data = handleDate(newAgendamento.data)
    setItem(newAgendamento)
    setModalDetalhes(true)
  }

  const handleDate = (data) => {
    if (data.length < 11)
      return data
    const newDate = data.substring(0, 10)
    const y = newDate.substring(0, 4)
    const m = newDate.substring(5, 7)
    const d = newDate.substring(8, 10)
    const formatedDate = d + '/' + m + '/' + y
    return formatedDate
  }

  return (
    <>
      {showModal && dados && <Container
        className="modal"
        onClick={e => { e.target.className.includes('modal') && setShowModal(false) }}>
        <Card>
          <header>
            <h2>Requisições</h2>
            <p>Selecione uma das opções para mais detalhes</p>
          </header>

          <RequisitionContent>
            {dados.map((item, index) => {
              return <RequisitonButton color="clock" alt="icone-relógio" key={index} onClick={() => openDetalhes(item)}>
                <span>
                  <img src={Clock} alt='t' />
                </span>
                <div>
                  <p>{item.categoria}</p>
                  <p className='data'>{handleDate(item.data)}</p>
                </div>
              </RequisitonButton>

            })}
          </RequisitionContent>

          <Buttons>
            <SecundaryButton onClick={() => { setShowModal(false) }}>Voltar</SecundaryButton>
          </Buttons>
        </Card>
      </Container>}
      <ModalDetalhes showDetalhes={modalDetalhes} setShowDetalhes={setModalDetalhes} dados={item} />
    </>
  );
}

export default Requisitions;
