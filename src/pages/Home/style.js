import styled from "styled-components"

export const Hub = styled.section`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 200px;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;

