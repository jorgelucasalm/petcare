import styled from "styled-components";

export const Button = styled.button `
    width: 10rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #074B55;
    background: none;
    text-decoration: none;
    text-align: center;
    line-height: 2rem;
    border: none;
    border-bottom: 2px solid #074B55; 
    transition: all 0.3s ease-out;

    &:hover {
        color: #1DA6BA; //PROPS DE COR
        border-bottom: 2px solid #1DA6BA; 
        transition: all 0.3s ease-out;
    }
`;