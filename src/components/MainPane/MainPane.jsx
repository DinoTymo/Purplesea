import React from "react";
import LogoBar from "./LogoBar";
import Navbar from "./Navbar";
import PostPane from "./PostPane";
import ProfilePane from "../ProfilePane/ProfilePane";

function MainPane() {
  return (
    <div className="main-pane">
      {/*<LogoBar />
      <Navbar />
      <PostPane />*/}
      <ProfilePane />
    </div>
  );
}

export default MainPane;
