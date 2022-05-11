import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 50px;
  background-color: red;
  height: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: 'center';
`;

const AppBar = () => {
  return (
    <Header>
      <H1>INTEGRAÇÃO COM A API DO RICK AND MORTY</H1>
    </Header>
  )
}

export default AppBar