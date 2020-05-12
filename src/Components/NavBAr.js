import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBAr extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" href="#">
          Excercise Tracker
        </Link>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                Excercises
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                Create user
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBAr;
