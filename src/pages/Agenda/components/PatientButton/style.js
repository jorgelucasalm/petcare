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

  &:hover {
    color: #3c3c3c;
    background: #ebebeb;
  }

  p {
    font-weight: 500;
    font-size: 0.8rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: ${(props) => {
      switch (props.color) {
        case 'clock':
          return '#E0C274';
        case 'return':
          return '#8BBFDC';
        case 'check':
          return '#8AD9A9';
        case 'cancel':
          return '#fa897b';
        default:
          return '#8BBFDC';
      }
    }};
  }
`;

export default PatientButton;
