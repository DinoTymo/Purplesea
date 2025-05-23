import React, { useState } from "react";
import InputCounter from "./InputCounter";
import LanguagePickerButton from "./LanguagePicker/LanguagePickerButton";
import LanguagePicker from "./LanguagePicker/LanguagePicker";
import "../../styles/bootstrap-icons.css";
import "material-symbols/outlined.css";

function Footer({ charCount, setPostState }) {
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

      <LanguagePicker />
        <!-- TODO: fix justify-content -->

      <div className="contentOptions w-25">
        <InputCounter charCount={charCount} setPostState={setPostState} />
      </div>
    </div>
  );
}

export default Footer;
