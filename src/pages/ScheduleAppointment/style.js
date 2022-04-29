import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 323px;
  max-width: 600px;
  height: 200vh;
  background-color: #ffffff;
  color: #074b55;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 2rem 0rem;

  :-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  :-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 16px; /* color of the tracking area */
  }

  :-webkit-scrollbar-thumb {
    background-color: #bcdbb3; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #ffffff; /* creates padding around scroll thumb */
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    padding: 1rem;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      text-align: center;
      padding: 0.5rem;
      max-width: 360px;
    }
  }
`;

export const DropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const Dropdown = styled.div`


  p {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: .8rem;
    font-weight: 500;
    color: #7d7d7d;
  }

  div {
    height: auto;
    width: fit-content;
    color: #b4b4b4;
    border-radius: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.2rem 0;
    max-width: 280px;
    min-width: 250px;
    padding: 1rem;
    background-color: #fdfdfd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
    font-size: 0.8rem;
  }
`;

export const Radio = styled.div`

`;
