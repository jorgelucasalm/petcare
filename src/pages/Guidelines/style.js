import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3c3c3c99;
  padding: 1rem;
  margin: 0;
  inset: 0;
  z-index: 9999;
`;

export const Card = styled.div`
  margin: 1rem;
  width: 100%;
  min-width: 300px;
  max-width: 450px;

  background-color: #ffffff;
  color: #074b55;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5rem;
  gap: 1rem;
  padding: 2rem 0rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }
    
    p {
      font-size: 0.8rem;
      text-align: center;
      padding: 0.5rem;
      max-width: 300px;
    }
  }
  @media (max-width: 700px) {
    margin: 0;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.8rem;
  width: 100%;
  max-width: 270px;

  span {
    font-weight: 600;
  }

  @media (min-width: 700px) {
    max-width: 300px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
