import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  height: 100vh;
  color: #074b55;
  background: linear-gradient(180deg, #bdd8dc 0%, #dbf1f4 100%);

  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: auto;
  }
`;

export const Circle = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;


  width: 80%;
  max-width: 12rem;
  min-width: 8rem;
  margin: 4rem;
  animation: loading 2s linear infinite;

  @keyframes loading {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const Paw = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  max-width: 8rem;
`;
