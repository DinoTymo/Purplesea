import React from "react";

function PostInput({ changeHandler, value }) {
  return (
    <textarea
      className="new-post-dialog-input"
      placeholder="What's up?"
      value={value}
      onChange={changeHandler}
    ></textarea>
  );
}

export default PostInput;
