import React from "react";
import ProfilePic from "../../ProfilePic";
import PostInput from "./PostInput";

function Body({ handleInputChange, postText }) {
  return (
    <div className="new-post-dialog-body card-body">
      <ProfilePic handle="hans.kisten-und-co-kg.de" size="50" />
      <PostInput changeHandler={handleInputChange} value={postText} />
      {/* Anybody can interact-Btn */}
    </div>
  );
}

export default Body;
