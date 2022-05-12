import RequisitonButton from './components/RequisitionButton';
import SecundaryButton from '../../components/SecundaryButton';

import Clock from '../../assets/img/clock.svg';
import Check from '../../assets/img/check.svg';
import Retorno from '../../assets/img/retorno.svg';
import Cancel from '../../assets/img/cancel.svg';

import { Container, Card, RequisitionContent, Buttons } from './style';

function Requisitions() {
  return (
    <Container>
      <Card>
        <header>
          <h2>Requisições</h2>
          <p>Selecione uma das opções para mais detalhes</p>
        </header>

        <RequisitionContent>
          <RequisitonButton color="clock" >
            <span>
              <img src={Clock} alt="icone-relógio"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="check" >
            <span>
              <img src={Check} alt="icone-check"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="cancel" >
            <span>
              <img src={Cancel} alt="icone-cancelar"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="return" >
            <span>
              <img src={Retorno} alt="icone-retorno"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="check" >
            <span>
              <img src={Check} alt="icone-check"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="cancel" >
            <span>
              <img src={Cancel} alt="icone-cancelar"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="return" >
            <span>
              <img src={Retorno} alt="icone-retorno"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="check" >
            <span>
              <img src={Check} alt="icone-check"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="cancel" >
            <span>
              <img src={Cancel} alt="icone-cancelar"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>

          <RequisitonButton color="return" >
            <span>
              <img src={Retorno} alt="icone-retorno"/>
            </span>
            <div>
              <p>Categoria</p>
              <p>12/02</p>
            </div>
          </RequisitonButton>
        </RequisitionContent>

        <Buttons>
          <SecundaryButton>Voltar</SecundaryButton>
        </Buttons>
      </Card>
    </Container>
  );
}

export default Requisitions;
