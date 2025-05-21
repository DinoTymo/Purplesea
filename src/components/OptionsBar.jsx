import React from "react";
import "../styles/bootstrap-icons.css";
import 'material-symbols/outlined.css';

function OptionsBar() {
  return (
    <div className="options-bar card-footer">
      <div className="attachmentPicker">
        <i class="bi bi-image text-primary fs-4"></i>
        <i class="bi bi-film text-primary fs-4"></i>
        <span class="material-symbols-outlined text-primary fs-2">gif_box</span>
      </div>

      <div className="contentOptions"></div>
    </div>
  );
}

export default OptionsBar;
