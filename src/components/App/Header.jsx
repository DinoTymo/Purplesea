import React from "react";

function Header() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Discover</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Feeds</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;