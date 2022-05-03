import styled from 'styled-components';
import Pata from '../../assets/img/background-paws.svg';
import Pata2 from '../../assets/img/background-paws2.svg';

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  background: url(${Pata}) left repeat-y, url(${Pata2}) right repeat-y;
  height: 90vh;
  background-color: #3c3c3c99;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 0;
  }

  h1 {
    font-weight: 600;
    font-size: 1.3rem;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    flex-wrap: wrap;
    width: 100%;
    max-width: 43.75rem;
  }
  @media (max-width: 700px) {
    overflow: auto;
    background-repeat: no-repeat;
  }
`;

export const Card = styled.div`

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
