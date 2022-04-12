import CircleIcon from '../../assets/img/Loading-icon (1).png';
import PawIcon from '../../assets/img/Loading-icon (2).png';
import { Container, Circle, Paw } from './style';

function Loading() {
  return (
    <Container>
      <h2>Aguarde um instante...</h2>
      <p>Estamos processando sua solicitação</p>
      <div>
        <Circle src={CircleIcon} alt="carregando-icone" />
        <Paw src={PawIcon} alt="pata-icone" />
      </div>
    </Container>
  );
}

export default Loading;
