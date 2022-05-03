import RequisitonButton from '../../components/RequisitionButton';
import { Navbar } from '../Login/style';
import Footer from '../../components/Footer';
import { Container, Card } from './style';

import Retorno from '../../assets/img//retorno.svg';
import Cancel from '../../assets/img/cancel.svg';

function Requisitions() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Card>
          <header>
            <h1>Requisições</h1>
            <p>Selecione uma das opções para mais detalhes</p>
          </header>
          <div>
            <RequisitonButton color='check'>
              <span><img src={Cancel} /></span>
              <div>
                <p>Categoria</p>
                <p>12/02</p>
              </div>
            </RequisitonButton>

            <RequisitonButton color='check'>
              <span><img src={Cancel} /></span>
              <div>
                <p>Categoria</p>
                <p>12/02</p>
              </div>
            </RequisitonButton>

            <RequisitonButton color='check'>
              <span><img src={Cancel} /></span>
              <div>
                <p>Categoria</p>
                <p>12/02</p>
              </div>
            </RequisitonButton>

            <RequisitonButton color='check'>
              <span><img src={Cancel} /></span>
              <div>
                <p>Categoria</p>
                <p>12/02</p>
              </div>
            </RequisitonButton>
          </div>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Requisitions;
