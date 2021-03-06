import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #3c3c3c99;
  padding: 0rem;
  margin: 0;
  inset: 0;
  z-index: 9999;
`;

export const Card = styled.div`
  margin: 1rem 0;
  overflow-y: scroll;
  overflow-x: hidden;

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

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(138, 195, 203, 0.56);
    border-radius: 20px;
    border: 3px solid #ffffff;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    padding: 1rem;
    padding-bottom: 0;

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

  @media (max-width: 700px) {
    margin: 0;
  }
`;

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 280px;
  min-width: 250px;
  
  input[type="date"]{
    padding: .5rem 0.5rem;
    border: none;
    border-bottom: 1px solid #9d9d9d;
  }

  p {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #7d7d7d;

    padding: 1rem 0rem 0.5rem;
  }
`;

export const Id = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #b4b4b4;
  border-radius: 1rem;
  max-width: 280px;
  min-width: 250px;
  padding: 0 1rem;
  background-color: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  font-size: 0.8rem;

  p {
    font-weight: 400;
  }

  &:hover {
    background: #efefef;
  }
`;

export const RadioContent = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #7d7d7d;

  div {
    display: flex;
    flex-direction: row;
  }

  input {
    size: 1rem;
  }
`;

export const Condition = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 280px;
  min-width: 250px;

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #7d7d7d;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    color: #909090;
  }

  div {
    padding: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;
