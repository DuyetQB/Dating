import styled from 'styled-components';


export const Backdrop = styled.div`
position: fixed;
background: rgba(0, 0, 0, 0.3);
top: 0;
left: 0;
right: 0;
width: 100vw;
height: 100vh;
z-index: 10;
display: flex;
justify-content: center;
align-items: center;
`;

export const BoxThird = styled.div`
background:#0B172D;
width:80%;
height:40%;
border-radius:15px;
padding:30px;
z-index:30;
`;