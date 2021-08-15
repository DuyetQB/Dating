import React from 'react';
import * as S from './styled';
export default function Button({$type, width, padding, margin,click,hover,ref, children}) {
  if ($type === 'green') {
    return (
      <S.GreenButton
        type="button"
        width={width}
        padding={padding}
        margin={margin}
        onClick={click}
      >
        {children}
      </S.GreenButton>
    );
  }

  if ($type === 'danger') {
    return (
      <S.DangerButton
        type="button"
        width={width}
        padding={padding}
        margin={margin}
        onClick={click}
      >
        {children}
      </S.DangerButton>
    );
  }


  if ($type === 'infor') {
    return (
      <S.InforButton
        type="button"
        width={width}
        padding={padding}
        margin={margin}
        onMouseOver={hover}
       
      >
        {children}
      </S.InforButton>
    );
  }

  if ($type === 'confirm') {
    return (
      <S.ConfirmButton
        type="button"
        width={width}
        padding={padding}
        margin={margin}
        onClick={click}
      >
        {children}
      </S.ConfirmButton>
    );
  }

  if ($type === 'final') {
    return (
      <S.FinalButton
        type="button"
        width={width}
        padding={padding}
        margin={margin}
        onClick={click}
      >
        {children}
      </S.FinalButton>
    );
  }


  return (
    <>
      <S.Button
        type="button"
        $type={$type}
        width={width}
        padding={padding}
        margin={margin}
        onClick={click}
      >
        {children}
      </S.Button>
    </>
  );
}
