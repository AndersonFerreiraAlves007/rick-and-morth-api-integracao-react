import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Aside = styled.aside`
  background-color: green;
  height: 100%;
  padding: 10px;
`

const H3 = styled.h3`
  text-Align: center;
  margin: 10px 0 20px; 
  font-Size: 30px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 10px ;
`

const Link2 = styled(Link)`
  margin: 10px 0;
  font-size: 20px;
`

const SideBar = () => {
  return (
    <Aside>
      <H3>Documentação</H3>
      <Nav>
        {/* <Link href='https://rickandmortyapi.com/documentation/#character-schema'>Personagens</Link>
        <Link href='https://rickandmortyapi.com/documentation/#location-schema'>Localização</Link>
        <Link href='https://rickandmortyapi.com/documentation/#episode-schema'>Episódios</Link> */}
        <Link2 to="/">Home</Link2>
        <Link2 to="/personagens">Personagens</Link2>
      </Nav>
    </Aside>
  )
}

export default SideBar
