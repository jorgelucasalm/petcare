import styled from 'styled-components';

export const Main = styled.div`
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

export const CardDetalhes = styled.div`
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
  gap: 0.5rem;
  padding: 1rem 0rem;
  padding-left: 24px;
  padding-right: 12px;

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
    font-size: 1.25rem;
    padding: .5rem 0rem;
  }

  span,
  p {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.5rem 0;
    max-width: 360px;
  }

  span {
    font-weight: bold;
  }

  .linha {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #c3c3c3;
  }

  small {
    width: 100%;
    font-size: .7rem;
    font-style: italic;
  }
  @media (max-width: 700px) {
  width: 300px;
  }
`;
