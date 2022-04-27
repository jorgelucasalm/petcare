import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 6;

  align-items: center;
  justify-content: center;

  padding: 1rem;
`;

export const Background = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  height: 6px;
  width: 300px;
  border-radius: 8px;
  z-index: 0;
`;

export const Progress = styled.div`
  grid-column: 1;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  z-index: 10;
  height: 6px;
  width: ${(props) => {
    switch (props.size) {
      case '25':
        return '20%';

      case '50':
        return '50%';

      case '75':
        return '75%';

      case '100':
        return '100%';

      default:
        return '0%';
    }
  }};

  background-color: ${(props) => {
    switch (props.color) {
      case 'dog':
        return '#6DBF8E';

      case 'cat':
        return '#9960AE';

      default:
        return '#074B55';
    }
  }};
`;
