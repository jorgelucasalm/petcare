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
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;

  width: 400px;
  background-color: #ffffff;
  color: #074b55;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 2rem 0rem;
  padding-left: 12px;

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


    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #6dbf8e;
    }

    p {
      font-size: .9rem;
      text-align: center;
      padding: 0.5rem;
      max-width: 360px;
    }
  

  @media (max-width: 700px) {
    margin: 0;
  }
`;
