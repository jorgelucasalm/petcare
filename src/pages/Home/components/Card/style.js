import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  background-color: #F9FCF3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;

    border-radius: 10px;
    box-shadow: 0 5px 10px -2px #b2b2b2;
    margin-bottom: 1rem;
  }

  h1{
    text-align: center;
  }

  @media (max-width: 700px) {
    div {
    width: 136px;
    height: 136px;

    }
  }
`;
