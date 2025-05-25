import React from "react";
import PostPane from "../PostPane";
import Banner from "./Banner";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-banner w-100">
        <Banner />
      </div>
      <div className="w-100">
        <img style={{width: "auto", height: "50px"}} src="https://avatar.iran.liara.run/public/boy?username=Hans+Oßner" alt="Hans Oßner" />
        <span style={{color: "white", fontWeight: "bolder"}}>&nbsp;Hans Oßner</span><span style={{color: "white"}}>&nbsp;hans.kisten-und-co-kg.de</span>
      </div>
      <PostPane />
    </div>
  );
}

export default Profile;
