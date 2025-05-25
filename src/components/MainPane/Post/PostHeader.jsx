import React from "react";
import ProfilePic from "../../ProfilePic";

function PostHeader(props) {
  return (
    <div className="card-header post-creator d-flex flex-row mb-3">
      <ProfilePic handle={props.handle} size="42" />{" "}
      <strong>&nbsp;&nbsp;&nbsp;{props.username}</strong>
      <p>&nbsp;{props.handle}</p> <p>&nbsp;{props.timestamp}</p>
    </div>
  );
}

export default PostHeader;
