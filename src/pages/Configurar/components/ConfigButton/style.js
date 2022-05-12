import styled from "styled-components"

const Button = styled.button`
    display: flex;
    gap: .5rem;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => {
      switch (props.color) {
        case 'alert':
          return '#f9897b';

        default:
          return '#B6B6B6';
      }
    }};
    text-decoration: none;
    text-align: left;
    width: 220px;
    height: 48px;
    padding: .8rem; 
    margin: .5rem 1rem;
    border: none;
    transition: all 0.3s ease-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background: ${(props) => {
      switch (props.color) {
        case 'alert':
          return '#fff1f1';

        default:
          return '#FDFDFD';
      }
    }};
    &:hover {
        span{
            background: #1da6ba;
            transition: all 0.3s ease-out;
        }
        color: #262626;
        color: ${(props) => {
      switch (props.color) {
        case 'alert':
          return '#c56c61';

        default:
          return '#262626';
      }
    }};
        background: ${(props) => {
        switch (props.color) {
        case 'alert':
          return '#ffa47d';

        default:
          return '#BED9DD';
      }
    }};
    }    
`

export default Button;