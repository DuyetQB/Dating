import React from 'react';
import * as S from './styled';

export default function CardPopupFirst({ $src,alt ,$bg, children, ...rest}) {
  
  return (
    <>
    <S.Backdrop>
      <S.Wrapper $bg={$bg} {...rest}>
      <S.Image src={$src} alt={alt}/>
      {children}
      </S.Wrapper>
    </S.Backdrop>
    </>
  );
}
