import styled from 'styled-components';

export const DropdownContainer = styled.select`
  width: 100%;
  color: #9d9d9d;
  border-radius: 1rem;
  margin: 0.2rem 0;
  max-width: 280px;
  min-width: 250px;
  padding: 1rem 0.5rem;
  background-color: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  font-size: 0.8rem;
  border: none;

  &:hover {
    background: #efefef;
    color: #3c3c3c;
  }

  option {
    color: #262626;
    margin-top: 0.2rem;
    transition-delay: 0.2s;

    display: flex;
    flex-direction: column;

    background-color: #f9fcf3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    color: #b4b4b4;
    font-size: 0.8rem;
    font-weight: medium;

    opacity: 0;
    transition-delay: 0.2s;
    transition: all 0.3s ease-out;

    padding: 10rem;
    line-height: 10rem;
  }
`;
