import styled from 'styled-components';

export const Hub = styled.section`
  margin: 0 auto;

  display: flex;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 500px;
  @media (max-width: 700px) {
    width: 100%;
    padding: 1.5rem 1rem;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;