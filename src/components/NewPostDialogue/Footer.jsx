import React from "react";
import "../../styles/bootstrap-icons.css";
import "material-symbols/outlined.css";

function Footer() {
  return (
    <div className="options-bar card-footer">
      <div className="attachmentPicker">
        <i className="bi bi-image text-primary fs-4"></i>
        <i className="bi bi-film text-primary fs-4"></i>
        <span className="material-symbols-outlined text-primary fs-2">
          gif_box
        </span>
      </div>

      <div className="contentOptions"></div>
    </div>
  );
}

export default Footer;
