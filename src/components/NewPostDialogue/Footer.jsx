import React from "react";
import "../../styles/bootstrap-icons.css";
import "material-symbols/outlined.css";

function Footer() {
  return (
    <div className="new-post-dialogue-footer card-footer">
      <div className="attachmentPicker w-25">
        <i className="bi bi-image text-primary fs-4"></i>
        <i className="bi bi-film text-primary fs-4"></i>
        <span className="material-symbols-outlined text-primary fs-2">
          gif_box
        </span>
        <span className="material-symbols-outlined text-primary fs-2">
          mood
        </span>
      </div>

      <div className="contentOptions w-25">Englisch 230 O</div>
    </div>
  );
}

export default Footer;
