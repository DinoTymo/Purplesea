import React from "react";
import "../../../../styles/bootstrap-icons.css";
import "material-symbols/outlined.css";

function AttachmentPicker() {
  return (
    <div className="attachmentPicker w-25">
      <i className="bi bi-image text-primary fs-4"></i>
      <i className="bi bi-film text-primary fs-4"></i>
      <span className="material-symbols-outlined text-primary fs-2">
        gif_box
      </span>
      <span className="material-symbols-outlined text-primary fs-2">mood</span>
    </div>
  );
}

export default AttachmentPicker;
