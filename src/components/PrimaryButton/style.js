import styled from "styled-components"

const Button = styled.button`
    font-family: Arial;
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    color: #ffffff;
    padding: .8rem 5rem;
    border-radius: 30px;
    transition: all 0.3s ease-out;
    border: none;
    background-color: ${(props) => {
        switch (props.color) {
            case 'dog':
                return '#6DBF8E'
            
            case 'cat':
                return '#9960AE'

            default:
                return '#074B55'
        }
    }};

    &:hover {
        background: ${(props) => {
        switch (props.color) {
            case 'dog':
                return 'linear-gradient(180deg, #D0E6A5 0%, #DDEDBD 100%);'
            
            case 'cat':
                return 'linear-gradient(180deg, #CCABD8 0%, #DBC4E3 100%);'

            default:
                return '#1DA6BA'
        }
    }};
    }
`

export default Button;