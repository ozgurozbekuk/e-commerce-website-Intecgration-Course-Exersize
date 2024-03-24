import React from 'react'

function NavMenu() {
  return (
    <div>
      <div className="navigation">
        <a href="#">Just In</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Brands</a>
        <a className="active" href="#">
          Sales
        </a>
      </div>
    </div>
  )
}

export default NavMenu
