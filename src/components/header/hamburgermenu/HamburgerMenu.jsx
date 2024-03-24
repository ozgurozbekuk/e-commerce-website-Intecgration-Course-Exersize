import React from 'react'

function HamburgerMenu({cartCounter}) {

  return (
    <div>
      <div className="more">
        <a className="menu" href="#">
          <i className="fa fa-align-right" />
        </a>
        <div className="figure">{cartCounter}</div>
      </div>
    </div>
  )
}

export default HamburgerMenu
