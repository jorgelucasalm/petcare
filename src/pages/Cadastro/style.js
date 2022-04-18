import styled from 'styled-components';

export const Navbar = styled.nav`
  display: none;
  height: 4rem;
  background-color: #bed9dd;

  @media (min-width: 700px) {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #074b55;

  p {
    padding: 0.6rem;
    font-size: 1rem;
  }

  img {
    display: flex;
    width: 80%;
    max-width: 19rem;
    min-width: 15rem;
  }

  a {
    text-decoration: none;
    font-size: 0.7rem;
    display: flex;
    color: #074b55;
    font-weight: 600;
    padding: 1rem;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    height: 90vh;
  }
`;

export const BlueSection = styled.div`
  display: none;

  @media (min-width: 700px) {
    width: 50vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //padding: 5rem 0;
    background: linear-gradient(180deg, #dbf1f4 0%, #bdd8dc 100%);
  }
`;

export const WhiteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  //padding: 5rem 0;

  @media (min-width: 700px) {
    width: 50vw;
    height: 100%;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 1.3rem;
  }
  p {
    font-weight: 500;
    font-size: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    //align-items: flex-end; tá gerando um bug no alinhamento da div
    padding: 1rem;
    width: fit-content;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;