import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;

  img{
    margin-right: 2rem;
  }

  h1 {
    color: #6DBF8E;
  }

  h2 {
    color: #535353;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 1.25rem;
    }

    h2 {
      font-size: .875rem;
    }

    img {
      width: 100px;
      margin-right: 1rem;
    }
  }
`;
