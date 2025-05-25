import React from "react";
import LogoBar from "../LogoBar";
import Navbar from "../Navbar";
import PostPane from "../PostPane";

function Home() {
  return (
    <div className="home">
      <LogoBar />
      <Navbar />
      <PostPane />
    </div>
  );
}

export default Home;
