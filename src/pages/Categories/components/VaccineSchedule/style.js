import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #3c3c3c99;
  padding: 0rem;
  margin: 0;
  inset: 0;
  z-index: 9999;
`;

export const Card = styled.div`
  margin: 1rem 0;
  overflow-y: scroll;
  overflow-x: hidden;

  width: 100%;
  min-width: 323px;
  max-width: 600px;
  height: 200vh;
  background-color: #ffffff;
  color: #074b55;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 2rem 0rem;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(138, 195, 203, 0.56);
    border-radius: 20px;
    border: 3px solid #ffffff;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    padding: 1rem;
    padding-bottom: 0;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      text-align: center;
      padding: 0.5rem;
      max-width: 360px;
    }
  }

  @media (max-width: 700px) {
    margin: 0;
  }
`;

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 280px;
  min-width: 250px;

  p {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #7d7d7d;

    padding: 1rem 0rem 0.5rem;
  }
`;

export const Id = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #b4b4b4;
  border-radius: 1rem;
  max-width: 280px;
  min-width: 250px;
  padding: 0 1rem;
  background-color: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  font-size: 0.8rem;

  p {
    font-weight: 400;
  }

  &:hover {
    background: #efefef;
  }
`;

export const CheckContent = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #7d7d7d;

  div {
    display: flex;
    flex-direction: row;
  }

  input {
    size: 1rem;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 16rem;
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;
