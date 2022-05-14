import RequisitonButton from './components/RequisitionButton';
import SecundaryButton from '../../../../components/SecundaryButton';

import Clock from '../../../../assets/img/clock.svg';
import Check from '../../../../assets/img/check.svg';
import Retorno from '../../../../assets/img/retorno.svg';
import Cancel from '../../../../assets/img/cancel.svg';
import { listarAgenda } from '../../../../service/serviceAgendamento';

import { Container, Card, RequisitionContent, Buttons } from './style';
import { useEffect, useState } from 'react';

function Requisitions({ showModal, setShowModal }) {
  const [dados, setDados] = useState([])
  useEffect(() => {
    listarAgenda((res) => {
      setDados(res)
    })
  }, [showModal])

  const handleDate = (data) => {
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
            {dados.map((item) => {
              return <RequisitonButton color="clock" alt="icone-relógio">
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
            <SecundaryButton>Voltar</SecundaryButton>
          </Buttons>
        </Card>
      </Container>}
    </>
  );
}

export default Requisitions;
