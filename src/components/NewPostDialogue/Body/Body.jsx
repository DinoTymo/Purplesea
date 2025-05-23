import React from "react";
import ProfilePic from "../../ProfilePic/ProfilePic";
import PostInput from "./PostInput";

function Body({ handleInputChange, postText }) {
  return (
    <div className="new-post-dialogue-body card-body">
      <ProfilePic size="50" />
      <PostInput changeHandler={handleInputChange} value={postText} />
      {/* Anybody can interact */}
    </div>
  );
}

export default Body;
