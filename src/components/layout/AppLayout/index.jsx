import React from 'react';
import styled from 'styled-components';
import {media} from 'styles/breakpoints';
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
    ${media.phone`
    width:100%;
    `}
  `;
  return (
    <Applayout>
      <Content>{children}</Content>
    </Applayout>
  );
}
