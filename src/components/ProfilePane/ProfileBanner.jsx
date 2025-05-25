import React from "react";
import ProfilePic from "../ProfilePic";

function ProfileBanner(props) {
  return (
    <div className="main-pane userBanner">
      <img src="https://picsum.photos/seed/emma/600/150" alt="profile banner" />
      <br />
      <ProfilePic handle={props.handle} size="72" />
      <br />
      <strong>{props.username}</strong>
      <p>{props.handle}</p>
      <p>{props.followers}</p>
      <p>{props.description}</p>
      <nav className="navbar navbar-expand-lg text-bg-dark border border-dark-subtle sticky-top">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Posts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ProfileBanner;
