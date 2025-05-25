import React from "react";
import Profile from "./Profile/Profile";
import Home from "./Home/Home";

function MainPane() {
  return (
    <div className="main-pane mx-4 border border-dark-subtle">
      {/*<Home />*/}
      <Profile />
    </div>
  );
}

export default MainPane;
