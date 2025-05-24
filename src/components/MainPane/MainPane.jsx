import React from "react";
import LogoBar from "./LogoBar";
import Navbar from "./Navbar";
import PostPane from "./PostPane";

function MainPane() {
  return (
    <div className="main-pane">
      <LogoBar />
      <Navbar />
      <PostPane />
    </div>
  );
}

export default MainPane;
