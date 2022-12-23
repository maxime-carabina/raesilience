import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render(): React.ReactNode {
    return (
      <div className="Header">
        <ul>
          <li>
            <a href="#">PROJECT</a>
          </li>
          <li>
            <a href="#">À PROPOS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">BOUTIQUE</a>
          </li>
        </ul>
        <div className="dot">
          <a></a>
        </div>
      </div>
    );
  }
}

export default Header;
