import React from 'react'
import AppBar from './AppBar'
import Footer from './Footer'
import SideBar from './SideBar'

/* const Layout = ({ children }) => {
  return (
    <div class="grid-container">
      <div class="item1"><AppBar/></div>
      <div class="item2"><SideBar/></div>
      <div class="item3">{children}</div>  
      <div class="item5"><Footer/></div>
    </div>
  )
} */

const withLayout = (Component) => {
  return function () {
    return (
      <div class="grid-container">
        <div class="item1"><AppBar/></div>
        <div class="item2"><SideBar/></div>
        <div class="item3">{<Component/>}</div>  
        <div class="item5"><Footer/></div>
      </div>
    )
  }
} 

export default withLayout