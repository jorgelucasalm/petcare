import styled from "styled-components";


export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 30%;
  max-width: 19rem;
  min-width: 16rem;
  padding: 1rem 1rem;
  background: ${(props) => {
      switch (props.color) {
        case 'notice':
          return '#DBF1F4';

        case 'alert':
          return '#FFF6E1';

        case 'resolved':
          return '#C7FFDD';

        default:
          return '#FFF6E1';
      }
    }};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  transition: all 0.3s ease-out;

  &:hover {
    background: ${(props) => {
      switch (props.color) {
        case 'notice':
          return '#C0F2F9';

        case 'alert':
          return '#fdeeca';

        case 'resolved':
          return '#A0EABE';

        default:
          return '#FFF6E1';
      }
    }};
    transform: scale(1.05);
    transition: all 0.3s ease-out;
  }
`;
