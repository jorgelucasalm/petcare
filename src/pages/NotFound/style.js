import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  gap: 3rem;
  overflow-y: hidden;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  color: #074b55;
  background: linear-gradient(180deg, #bdd8dc 0%, #dbf1f4 100%);

  h2 {
    font-size: 1.1rem;
    font-weight: 500;

    @media (max-width: 700px) {
      text-align: center;
    }
  }

  p {
    width: 100%;
    max-width: 350px;
    min-width: 300px;
    font-size: 0.9rem;
    font-weight: 400;

    padding: 0.5rem 0;

    @media (max-width: 700px) {
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  img {
    width: 100%;
    max-width: 350px;
    padding: 1rem 0;

    @media (max-width: 700px) {
      padding: 0 1rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export const Dog = styled.img`
  width: 100%;
  max-width: 16rem;
  min-width: 12rem;
`;
