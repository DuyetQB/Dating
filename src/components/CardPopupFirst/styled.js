import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 37%;
  height: 90%;
  border-radius: 15px;
  ${({$bg}) =>
    $bg &&
    css`
      background: url(${$bg});
    `};
`;


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

export const Image = styled.img`
width:260px;
height:260px;
object-fit:cover;
`;
