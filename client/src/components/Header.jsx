import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a className="" href="#home">
                Home
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Sanjiv</h1>
            <h3>I love to code and thinking.</h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
