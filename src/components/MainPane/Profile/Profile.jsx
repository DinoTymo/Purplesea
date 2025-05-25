import React from "react";
import PostPane from "../PostPane";
import Banner from "./Banner";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-banner w-100">
        <Banner />
      </div>
      <PostPane />
    </div>
  );
}

export default Profile;
