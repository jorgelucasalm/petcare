import {
  Container
} from "./style"

const TopSection = ({ tittle, image }) => {
  return (
    <Container>
      <img src={image} alt="pet" />
      <div>
        <h1>Olá, <span>Gerônimo!</span></h1>
        <h2>O que temos pra hoje?</h2>
      </div>
    </Container>
  );
}

export default TopSection;
