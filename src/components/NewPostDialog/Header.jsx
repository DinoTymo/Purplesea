import React from "react";

function Header({ postState, setDialogVisible, isDialogVisible }) {
  return (
    <div className="new-post-dialog-header card-header">
      <button
        className="text-primary btn fw-bold lh-sm border-0"
        type="button"
        onClick={() => {
          setDialogVisible(!isDialogVisible);
        }}
      >
        Cancel
      </button>

      <button
        className="btn btn-primary rounded-pill fw-bold"
        disabled={postState === "disabled"}
      >
        Post
      </button>
    </div>
  );
}

export default Header;
