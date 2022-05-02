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
    
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2rem 0;
    }
    h1{
        font-weight: 600;
        font-size: 1.3rem;
    }

    t{
        font-weight: 500;
        font-size: 1rem;
        text-align: center;   
    }

    p{
        font-weight: 500;
        font-size: 1rem;
        text-align: left;   
    }

    h2{
        font-weight: 400;
        font-size: 1rem;
    }

    div{
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 43.75rem;
    }

    item{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: left;
        padding: 1rem;
        height: 80px;
        width: 233px;
    }

    @media(max-width: 700px){
        overflow: auto;
        background-repeat: no-repeat;
        item{
            height: 64px;
            padding-bottom: 2rem;
        }
    }
`;