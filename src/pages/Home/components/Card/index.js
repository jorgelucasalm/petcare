import {
  Container
} from "./style"

const Card = ({ tittle, image }) => {
  return (
    <Container>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{tittle}</h1>
    </Container>
  );
}

export default Card;
