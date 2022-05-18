import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';

const Header = styled.header`
  height: 50px;
  background-color: red;
  height: 100%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  
`;

const H1 = styled.h1`
  text-align: 'center';
`;

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background-color: black;
  color: white;
  border-radius: 50%;
  display: flex; 
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const AppBar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <Header>
      <H1>INTEGRAÇÃO COM A API DO RICK AND MORTY</H1>
      <Avatar onClick={() => setShow(true)}>
        Sair
      </Avatar>
    </Header>
    <Modal title="Logout" onClose={() => setShow(false)} show={show}>
      <p>Você deseja realmente sair?</p>
    </Modal>
  </>
  )
}

export default AppBar