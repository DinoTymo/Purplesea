import React from "react";

function Header({ postState }) {
  return (
    <div className="new-post-dialogue-header card-header">
      <div className="text-primary fw-bold">Cancel</div>
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
