import styled from 'styled-components';

export const Button = styled.button`
  width: 10rem;
  font-family: Arial; /*Trocar de fonte*/
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(props) => {
    switch (props.color) {
      case 'dog':
        return '#6DBF8E';

      case 'cat':
        return '#9960AE';

      default:
        return '#074B55';
    }
  }};
  background: none;
  text-decoration: none;
  text-align: center;
  line-height: 2rem;
  border: none;
  border-bottom: 2px solid
    ${(props) => {
    switch (props.color) {
      case 'dog':
        return '#6DBF8E';

      case 'cat':
        return '#9960AE';

      default:
        return '#074B55';
    }
  }};
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.3s ease-out;
    border-bottom: 2px solid ${(props) => {
    switch (props.color) {
      case 'dog':
        return '#D0E6A5;';

      case 'cat':
        return '#CCABD8;';

      default:
        return '#1DA6BA';
    }
  }};

    color: ${(props) => {
    switch (props.color) {
      case 'dog':
        return '#D0E6A5;';

      case 'cat':
        return '#CCABD8;';

      default:
        return '#1DA6BA';
    }
  }};
  }
`;
