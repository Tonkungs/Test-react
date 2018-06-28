import React from 'react'
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
        <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img
                src="https://devahoy.com/assets/images/devahoy-text-logo.png"
                alt="DEVAHOY LOGO"
                width="112"
                height="28"
              />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <NavLink
                exact
                to="/"
                activeClassName="is-active"
                className="navbar-item"
              >
                Home
              </NavLink>
              <NavLink
                to="/posts"
                activeClassName="is-active"
                className="navbar-item"
              >
                Posts
              </NavLink>
              <NavLink
                to="/projects"
                activeClassName="is-active"
                className="navbar-item"
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="is-active"
                className="navbar-item"
              >
                About
              </NavLink>
              <a className="navbar-item" href="#" target="_blank">
                Star on <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header