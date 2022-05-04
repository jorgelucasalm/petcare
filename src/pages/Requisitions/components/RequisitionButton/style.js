import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: #909090;
  text-decoration: none;
  text-align: left;
  width: 100%;
  max-width: 280px;

  padding: 1rem 0.8rem;
  border: none;
  transition: all 0.3s ease-out;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  p {
    font-weight: 600;
    font-size: 0.8rem;

    margin-right: 8rem;
  }

  &:hover {
    color: #3c3c3c;
    background: #efefef;
  }
  img {
    width: 60%;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1.2rem;
    min-height: 1.2rem;
    border-radius: 50%;
    background: ${(props) => {
      switch (props.color) {
        case 'clock':
          return '#E0C274';

        case 'return':
          return '#8BBFDC';

        case 'check':
          return '#8AD9A9';

        case 'cancel':
          return '#fa897b';

        default:
          return '#1DA6BA';
      }
    }};
  }
  @media (max-width: 700px) {
    min-width: 280px;
  }
`;

export default Button;
