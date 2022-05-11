import React from 'react'
import styled from 'styled-components'
import AppBar from './AppBar'
import Footer from './Footer'
import SideBar from './SideBar'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 15vh 75vh 10vh;
  grid-template-areas: "header header" "sidenav content" "footer footer";
`

const AppBarContainer = styled.div`
  grid-area: header;
`

const SideBarContainer = styled.div`
  grid-area: sidenav; 
`

const ComponentContainer = styled.div`
  grid-area: content; 
  overflow: auto;
`

const FooterContainer = styled.div`
  grid-area: footer;
`

const withLayout = (Component) => {
  return function () {
    return (
      <GridContainer>
        <AppBarContainer>
          <AppBar/>
        </AppBarContainer>
        <SideBarContainer>
          <SideBar/>
        </SideBarContainer>
        <ComponentContainer>
          <Component/>
        </ComponentContainer>  
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </GridContainer>
    )
  }
} 

export default withLayout