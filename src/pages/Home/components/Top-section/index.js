import {
  Container
} from "./style"

const TopSection = ({ tittle, image }) => {
  return (
    <Container>
      <img src={image} alt="" />
      <div>
        <h1>Olá, <span>Gerônimo!</span></h1>
        <h2>Como está a <span>Marley?</span></h2>
      </div>
    </Container>
  );
}

export default TopSection;
