import styled from 'styled-components';

export const Container = styled.nav`
  /* display: none; */
  height: 4rem;
  box-shadow: 0 5px 10px -2px #b2b2b2;

  background-color: ${(props) => props.theme.colors.navbar};
      
  span,
  img {
    padding-right: 1rem;
    color: #535353;
  }

  nav {
    max-width: 700px;
    margin: 0 auto;
    height: 4rem;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }

  @media (min-width: 700px) {
    display: block;
  }
`;
