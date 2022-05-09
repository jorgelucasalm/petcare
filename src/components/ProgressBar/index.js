import { Container, Progress, Background } from './style';

function ProgressBar({ size }) {
  return (
    <>
      <Container>
        <Progress size={size} />
        <Background />
      </Container>
    </>
  );
}

export default ProgressBar;
