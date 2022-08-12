import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-dark navbar-style">
          <a className="navbar-brand" href="/#">
            eCommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
} /*this h1 and pargraph are the children of
the NavBar component; NavBar is at the top of
the hierarchy, and can render multiple 
children; so this is the virtual DOM */
/*React.Fragment acts as a container for
the tags, but it doesn't render an extra html tag
in the output the way a div does; */
