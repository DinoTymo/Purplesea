import React from "react";
import Post from "./Post/Post";

function PostPane() {
  return (
    <div className="post-pane">
      <Post username="" handle="urmum@psea.social" timestamp="2 Std." content="das in der json halt" comments="154" reposts="10" likes="354" />
      <Post username="urmum" handle="urmum@psea.social" timestamp="2 Std." content="das in der json halt" comments="74" reposts="2" likes="98" />
      <Post username="urmum" handle="urmum@psea.social" timestamp="2 Std." content="das in der json halt" comments="45" reposts="68" likes="451" />
    </div>
  );
}

export default PostPane;
