import {
  Container
} from "./style"

const Card = ({ tittle, image, onClick }) => {
  return (
    <Container onClick={onClick}>
      <div>
        <img src={image} alt="" />
      </div>
      <h3>{tittle}</h3>
    </Container>
  );
}

export default Card;
