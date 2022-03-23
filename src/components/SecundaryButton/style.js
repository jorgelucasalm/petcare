import styled from "styled-components";

export const Button = styled.button `
    width: 10rem;
    font-family: Arial; /*Trocar de fonte*/
    font-size: 0.8rem;
    font-weight: 600;
    color: #074B55;
    text-decoration: none;
    text-align: center;
    line-height: 2rem;
    border-bottom: 2px solid #074B55; 
    transition: all 0.3s ease-out;

    &:hover {
        color: #1DA6BA;
        border-bottom: 2px solid #1DA6BA; 
        transition: all 0.3s ease-out;
    }
`;