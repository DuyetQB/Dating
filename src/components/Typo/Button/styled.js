import styled, {css} from 'styled-components';

export const Button = styled.button`
  position: relative;
  background: #ccc;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border-radius: 4px;
  outline: none;
  
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
  &:focus {
    box-shadow: 0 0 0 3px rgb(115 103 240 / 50%);
  }
`;

export const GreenButton = styled(Button)`
  background: #7367f0;
  box-shadow: 0 0 0 3px rgb(115 103 240 / 50%);
  border: 2px solid #7367f0;
  &:focus {
    border: 2px solid #7367f0;
  }

  ${({padding}) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({margin}) =>
    margin &&
    css`
      margin: ${margin};
    `};
`;

export const DangerButton = styled(Button)`
  background-color: #dc3545;
  border: 2px solid #dc3545;
  position: absolute;
  top: 30%;
  left: 40%;
  box-shadow: 0 0 0 3px rgb(115 103 240 / 50%);
  &:hover {
    background-color: #c82333;
  }
  &:focus {
  border: 2px solid #c82333;
  }
`;

export const InforButton = styled(Button)`
  background-color: #17a2b8;
  border: 2px solid #17a2b8;
  cursor:auto !important;
  position: absolute;
  top: 10%;
  left: 60%;
  
`;

export const ConfirmButton = styled(Button)`
  background-color: rgb(254, 138, 113);
  border: 2px solid rgb(254, 138, 113);
  box-shadow: 0 0 0 3px rgb(115 103 240 / 50%);
  ${({padding}) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({margin}) =>
    margin &&
    css`
      margin: ${margin};
    `};
`;

export const FinalButton = styled(Button)`
  background-color: rgb(131, 208, 201);
  border: 2px solid rgb(131, 208, 201);
  box-shadow: 0 0 0 3px rgb(115 103 240 / 50%);
`;
