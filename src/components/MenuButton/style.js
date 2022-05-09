import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  transition: all 0.3s ease-out;

  /*No caso, aqui é um gradiente... como que faz?*/
  background-color: ${(props) => {
    switch (props.color) {
      case 'dog':
        return '#F9FCF3';

      case 'cat':
        return '#FBF9FC';

      default:
        return '#BED9DD';
    }
  }};
`;
