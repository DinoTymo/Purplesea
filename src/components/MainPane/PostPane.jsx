import React from "react";
import Post from "./Post/Post";

function PostPane() {
  return (
    <div className="post-pane">
      <Post username="urmum" handle="urmum@psea.social" timestamp="2 Std." />
      <Post username="urmum" handle="urmum@psea.social" timestamp="2 Std." />
      <Post username="urmum" handle="urmum@psea.social" timestamp="2 Std." />
    </div>
  );
}

export default PostPane;
