import {
  Container
} from "./style"

const Card = ({ tittle, image }) => {
  return (
    <Container>
      <div>
        <img src={image} alt="" />
      </div>
      <h3>{tittle}</h3>
    </Container>
  );
}

export default Card;
