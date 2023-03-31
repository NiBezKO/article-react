import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="headerInner">
        <div>
          <p className="logo">My Articles</p>
        </div>
        <ul className="nav">
          <li className="navLink">
            <Link className="link" to="/">
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
