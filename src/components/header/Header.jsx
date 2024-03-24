import React from 'react'
import Logo from './logo/Logo'
import NavMenu from './navmenu/NavMenu'
import HamburgerMenu from './hamburgermenu/HamburgerMenu'

function Header({cartCounter}) {
  return (
    <header>
      <Logo/>
      <NavMenu/>
      <HamburgerMenu cartCounter={cartCounter}/>
    </header>
  )
}

export default Header
