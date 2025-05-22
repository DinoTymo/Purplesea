import React from "react";
import ProfilePic from "../ProfilePic";

function Body() {
  return (
    <div className="new-post-dialogue-body card-body">
      <ProfilePic size="50" />
      <textarea
        className="new-post-dialogue-input"
        placeholder="What's up?"
      ></textarea>
      {/* Anybody can interact */}
    </div>
  );
}

export default Body;
