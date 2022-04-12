import Icon from '../../assets/img/not-found.png';
import Logo from '../../assets/img/Not-found-logo.png';

import { Container, Content, Dog } from './style';
import PrimaryButton from '../../components/PrimaryButton';

function NotFound() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo-petcare" />
        <div>
          <h2>Há algo errado...</h2>
          <p>
            A página que você procura não está disponível ou foi permanentemente
            removida.
          </p>
        </div>
        <PrimaryButton>Tela Inicial</PrimaryButton>
      </Content>

      <div>
        <Dog src={Icon} alt="erro-404" />
      </div>
    </Container>
  );
}

export default NotFound;
