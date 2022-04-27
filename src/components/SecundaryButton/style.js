import styled from 'styled-components';

export const Button = styled.button`
  width: 10rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #074b55;
  background: none;
  text-decoration: none;
  text-align: center;
  line-height: 2rem;
  border: none;
  border-bottom: 2px solid #074b55;
  transition: all 0.3s ease-out;

  &:hover {
    color: #1da6ba; //PROPS DE COR
    border-bottom: 2px solid #1da6ba;
    transition: all 0.3s ease-out;
  }
`;
