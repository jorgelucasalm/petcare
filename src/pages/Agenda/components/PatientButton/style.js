import styled from 'styled-components';

export const PatientButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 280px;
  padding: 0.7rem;
  color: #909090;
  border: none;
  transition: all 0.3s ease-out;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;



  p {
    font-weight: 500;
    font-size: 0.8rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }

  &:hover {
    color: #3c3c3c;
    background: #efefef;

    img {
      transform: scale(1.1); 
    }
  }

`;

export default PatientButton;
