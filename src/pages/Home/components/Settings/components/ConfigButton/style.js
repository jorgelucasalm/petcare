import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  text-align: left;
  width: 100%;
  max-width: 280px;
  padding: 1.2rem 0.8rem;
  border: none;
  transition: all 0.3s ease-out;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: ${(props) => {
    switch (props.color) {
      case 'alert':
        return '#FFF1F1';
      default:
        return '#fdfdfd';
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'alert':
        return '#FA897B';
      default:
        return '#909090';
    }
  }};
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: 600;
    font-size: 0.8rem;
    margin-right: 8rem;
  }
  &:hover {
    background: ${(props) => {
    switch (props.color) {
      case 'alert':
        return '#FFE5E5';
      default:
        return '#efefef';
    }
  }};
  color: ${(props) => { 
    switch (props.color) {
      case 'alert':
        return '#FA897B';
      default:
        return '#858585';
    }
  }};
  }
  @media (max-width: 700px) {
    min-width: 280px;
  }
`;

export default Button;