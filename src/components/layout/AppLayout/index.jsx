import React from 'react';
import styled from 'styled-components';

import MainBg from 'images/main-background.jpg';

export default function AppLayout({children}) {
  const Applayout = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Content = styled.div`
    height: 100vh;
    background: url(${MainBg});
    background-size: cover;
  `;
  return (
    <Applayout>
      <Content>{children}</Content>
    </Applayout>
  );
}
