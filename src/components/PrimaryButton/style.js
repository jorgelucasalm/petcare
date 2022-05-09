import styled from 'styled-components';

const Button = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  width: 220px;
  padding: 0.8rem;
  margin: 0.5rem 1rem;
  border: none;
  border-radius: 30px;
  transition: all 0.3s ease-out;
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

  &:hover {
    background: ${(props) => {
    switch (props.color) {
      case 'dog':
        return 'linear-gradient(180deg, #D0E6A5 0%, #DDEDBD 100%);';

      case 'cat':
        return 'linear-gradient(180deg, #CCABD8 0%, #DBC4E3 100%);';

      default:
        return '#1DA6BA';
    }
  }};
  }
`;
export default Button;
