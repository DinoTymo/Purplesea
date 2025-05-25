import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

function Post(props) {
  return (
    <div className="post card mx-auto p-2 text-bg-dark border-dark-subtle">
      <PostHeader handle={props.handle} timestamp={props.timestamp} />
      <PostBody
        comments={props.comments}
        likes={props.likes}
        reposts={props.reposts}
        handle={props.handle}
        content={props.content}
      />
    </div>
  );
}

export default Post;
