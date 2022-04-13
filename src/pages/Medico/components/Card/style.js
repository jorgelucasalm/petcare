import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    background-color: #F9FCF3;

    border-radius: 10px;
    box-shadow: 0 5px 10px -2px #b2b2b2;
    margin-bottom: 1rem;
  }

  div img {
    width: 2.5rem;
  }

  h3{
    text-align: center;
    font-size: .8rem;
    color: #909090;
    font-weight: 600;
  }
  div:hover {
   background-color: #f2f9e5;
   transition: all 0.3s ease-out;
 }  

  @media (max-width: 700px) {

  }
`;
