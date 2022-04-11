import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    width: 100%;
    height: 100vh;
    color: #074B55;
    background: linear-gradient(180deg, #BDD8DC 0%, #DBF1F4 100%);

    h2 {
        font-size: 1.1rem;
        font-weight: 500;
    }

    p {
        max-width: 350px;
        min-width: 320px;
        font-size: .9rem;
        font-weight: 400;

        padding: .5rem 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

export const Dog = styled.img`
    margin: 4rem;
`;