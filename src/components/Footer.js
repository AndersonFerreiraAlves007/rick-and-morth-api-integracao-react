import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background-color: blue; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  color: white;
`

const FooterLocal = () => {
  return (
    <Footer >
      Anderson Pages. Aproveite nossa integração com a api do rick and morty e conheça diversos personagens!
    </Footer>
  )
}

export default FooterLocal