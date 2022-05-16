import {
  Container
} from "./style"

const TopSection = ({ tittle, image, data }) => {
  const firstName = data.user.name.split(' ')[0]
  const petName = data.pet.nome.split(' ')[0]
  return (
    <Container>
      <img src={image} alt="pet" />
      <div>
        <h1>Olá, <span>{firstName}!</span></h1>
        <h2>Como está a <span>{petName}?</span></h2>
      </div>
    </Container>
  );
}

export default TopSection;
