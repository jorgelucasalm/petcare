import styled from 'styled-components';

export const Hub = styled.section`
  width: 60%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
