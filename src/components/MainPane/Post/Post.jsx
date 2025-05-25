import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

function Post(props) {
  const date = new Date(props.timestamp * 1000);
  const formatedDate = date.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="post card mx-auto p-2 text-bg-dark border-dark-subtle">
      <PostHeader handle={props.handle} timestamp={formatedDate} />
      <PostBody
        id={props.id}
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
