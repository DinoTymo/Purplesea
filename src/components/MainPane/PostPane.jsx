import React from "react";
import Post from "./Post/Post";

function PostPane() {
  return (
    <div className="post-pane">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostPane;
