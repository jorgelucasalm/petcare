import styled from "styled-components";

const PrimaryFooter = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1.5rem;
    color: #ffffff;
    font-size: .9rem;

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
`;

export default PrimaryFooter;
