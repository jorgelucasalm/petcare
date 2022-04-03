import {
  Container
} from "./style"

const TopSection = ({ tittle, image }) => {
  return (
    <Container>
      <img src={image} alt="" />
      <div>
        <h1>Olá, Gerônimo!</h1>
        <span>Como está a minerva?</span>

      </div>
    </Container>
  );
}

export default TopSection;
