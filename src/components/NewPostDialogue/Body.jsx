import React from "react";
import ProfilePic from "../ProfilePic";
import PostInput from "../PostInput";

function Body() {
  return (
    <div className="new-post-dialogue-body card-body">
      <ProfilePic size="50" />
      <PostInput />

      {/* Anybody can interact */}
    </div>
  );
}

export default Body;
