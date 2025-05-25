import React from "react";

function NewPostButton({ isDialogVisible, setDialogVisible }) {
  return (
    <button
      className="new-post-button btn btn-primary rounded-pill fw-semiboldpx-1 py-1"
      onClick={() => {
        setDialogVisible(!isDialogVisible);
      }}
    >
      <span className="material-symbols-outlined fs-5 lh-sm me-1">
        edit_square
      </span>
      <span>New Post</span>
    </button>
  );
}

export default NewPostButton;
