import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    width: 100%;
    height: 100vh;
    color: #074B55;
    background: linear-gradient(180deg, #BDD8DC 0%, #DBF1F4 100%);

    h2 {
        font-size: 1.1rem;
        font-weight: 600;
        padding: .5rem;
    }

    p {
        font-size: .9rem;
        font-weight: 500;
    }

    img {
        width: 80%;
        max-width: 12rem;
        min-width: 8rem;
        margin: 4rem;
        animation: loading 5s linear infinite;

        @keyframes loading {
            from {
                transform: rotate(0);
            }

            to {
                transform: rotate(360deg);
            }
        }
    }
`;