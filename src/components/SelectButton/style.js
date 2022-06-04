import styled from "styled-components"

const Button = styled.button`
    display: flex;
    gap: .5rem;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: #909090;
    text-decoration: none;
    text-align: left;
    width: 220px;
    height: 48px;
    padding: .8rem; 
    margin: .5rem 1rem;
    border: none;
    transition: all 0.3s ease-out;
    background: #FDFDFD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    
    &:hover {
        span{
            background: #1da6ba;
            transition: all 0.3s ease-out;
        }
        color: #262626;
        background: #BED9DD;
    }

    span{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background: #C4C4C4;
    }
    
`

export default Button;