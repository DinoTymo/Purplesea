import React from "react";

function navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Discover</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Feeds</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar;