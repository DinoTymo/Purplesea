import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-bg-dark sticky-top">
      <div className="container-fluid">
        <ul className="navbar-nav" id="specialNavbar">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Feeds
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
