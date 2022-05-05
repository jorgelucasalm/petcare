import styled from 'styled-components';
import Pata from '../../assets/img/background-paws.svg';
import Pata2 from '../../assets/img/background-paws2.svg';

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${Pata}) left repeat-y, url(${Pata2}) right repeat-y;
  height: 100vh;
  background-color: #3c3c3c99;
  @media (max-width: 700px) {
    overflow: auto;
    background-repeat: no-repeat;
  }
`;

export const Card = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  max-height: 650px;
  background-color: #ffffff;
  color: #074b55;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
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
    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }
    p {
      font-size: 0.8rem;
      text-align: center;
      padding: 0.5rem;
    }
  }
  @media (max-width: 700px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  width: 700px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

