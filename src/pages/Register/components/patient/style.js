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
    height: 95vh;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: fit-content;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;
