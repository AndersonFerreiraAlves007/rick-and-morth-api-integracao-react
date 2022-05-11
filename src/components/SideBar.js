import React from 'react'
import styled from 'styled-components'

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

const Link = styled.a`
  margin: 10px 0;
  font-size: 20px;
`

const SideBar = () => {
  return (
    <Aside>
      <H3>Documentação</H3>
      <Nav>
        <Link href='https://rickandmortyapi.com/documentation/#character-schema'>Personagens</Link>
        <Link href='https://rickandmortyapi.com/documentation/#location-schema'>Localização</Link>
        <Link href='https://rickandmortyapi.com/documentation/#episode-schema'>Episódios</Link>
      </Nav>
    </Aside>
  )
}

export default SideBar
