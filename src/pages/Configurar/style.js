import styled from "styled-components";
import Pata from "../../assets/img/background-paws.svg"
import Pata2 from "../../assets/img/background-paws2.svg"


export const Container=styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    background: url(${Pata}) left repeat-y, url(${Pata2}) right repeat-y;
    height: 90vh;
    overflow: auto;
    
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2rem 0;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            div{
                color: #656565;
            }
        }
    }

    h1{
        font-weight: 600;
        font-size: 1.3rem;
    }

    p{
        font-weight: 500;
        font-size: 1rem;
    }

    div{
        display: flex;
        justify-content: center;
        gap:.3rem;
        flex-wrap: wrap;
        width: 100%;
        max-width: 43.75rem;
    }

    img {
        display: flex;
        justify-content: center;
        width: 7rem;
        margin-right: 1rem;
    }

    @media(max-width: 700px){
        overflow: auto;
        background-repeat: no-repeat;
    }
`;