import styled from 'styled-components';

export const Hub = styled.section`
  margin: 0 auto;

  display: flex;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 500px;
  @media (max-width: 700px) {
    width: 100%;
    padding: 1.5rem 1rem;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;

// body {
//   font - family: Poppins;
//   padding: 0rem;
//   margin: 0;
//   display: flex;
//   flex - direction: column;
//   overflow - x: hidden;
//   height: 100vh;
// }


// .saudacao {
//   width: 98 %;
//   display: flex;
//   flex - direction: row;
//   align - items: center;
//   justify - content: center;

//   font - size: .8rem;

// }

// .pet {
//   width: 5rem;
//   padding: 1rem 1rem 0 0;
// }

// .buttons {
//   display: flex;
//   flex - wrap: wrap;
//   gap: 1rem;

//   align - items: center;
//   justify - content: center;

//   padding: 2rem 0;


//   width: 100 %;
//   max - width: 500px;
// }

// .btn - content {
//   border: none;
//   background: none;
//   display: flex;
//   flex - direction: column;
//   align - items: center;
//   padding: 0;
//   gap: 1rem;
//   font - size: .8rem;
//   font - weight: 600;
//   color: #909090;
// }

// .button:hover {
//   background - color: #F0FFD3;
//   transition: all 0.3s ease - out;
// }

// .microtext {
//   font - size: .7rem;
//   color: #909090;
// }