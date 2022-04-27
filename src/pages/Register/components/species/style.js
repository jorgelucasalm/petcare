import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #3c3c3c99;
  padding: 0rem;
  margin: 0;

  inset: 0;
`;

export const Card = styled.div`
  position: sticky;
  z-index: 9999;
  top: 20;

  width: 100%;
  min-width: 323px;
  max-width: 600px;
  background-color: #ffffff;
  color: #074B55;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  gap: 1rem;

  padding: 3rem 0rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-weight: 600;
    font-size: 1.3rem;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
  }

  img {
    display: flex;
    width: 80%;
    max-width: 19rem;
    min-width: 15rem;
  }

  a {
    text-decoration: none;
    font-size: 0.7rem;
    display: flex;
    color: #074b55;
    font-weight: 600;
    padding: 1rem;
  }

  @media (min-width: 700px) {
    display: flex;
    height: 90vh;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 21rem;
  min-width: 16rem;
  padding: 1rem 1rem;
  color: #3c3c3c;
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

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: .8rem;
  }

  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: .7rem;
  }
`;

export const SelectorContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Selector = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  border: none;
  border-radius: 8px;

  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
    font-weight: 500;
    transition: all 0.3s ease-out;

    background: ${(props) => {
      switch (props.color) {
        case 'dog':
          return '#F9FCF3';

        case 'cat':
          return '#FBF9FC';

        default:
          return '#FAFEFF';
      }
    }};
  }

  img {
    width: 90%;
    min-width: 6rem;
    max-width: 8rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;
