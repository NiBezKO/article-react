import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <div className="headerInner">
          <div>
            <p className="logo">My Articles</p>
          </div>
          <ul className="nav">
             <li className="navLink">
                <p>Articles</p>
             </li>
          </ul>
        </div>
      </header>
  )
}

export default Header
