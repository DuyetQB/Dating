import React from 'react';

import * as S from './styled';

export default function index({children}) {
  return (
    <S.Backdrop>
      <S.Box>
      {children}
      
      </S.Box>
    </S.Backdrop>
  );
}
