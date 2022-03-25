import styled from "styled-components"

export const Navbar = styled.nav `
    height: 4rem;
    background-color: #BED9DD;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #074B55;

    p {
        padding: .6rem;
        font-size: 1rem;
    }

    img {
        display: flex;
        padding: 2rem 0rem;
        width: 80%;
        max-width: 19rem;
        min-width: 15rem;
    }

    a {
        text-decoration: none;
        font-size: 0.7rem;
        display: flex;
        color: #074B55;
        font-weight: 600;
        padding: 1rem;
    }

`; 

export const BlueSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    padding: 6rem 0rem;

    background: linear-gradient(180deg, #DBF1F4 0%, #BDD8DC 100%);;
    height: 100%;
`;

export const WhiteSection = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    padding: 6rem 0rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
    }
`;

export const TextBox = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.footer `
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    background-color: #074B55;
    color: #ffffff;
    font-size: .9rem;
`;


