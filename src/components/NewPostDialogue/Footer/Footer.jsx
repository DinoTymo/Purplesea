import React, { useState } from "react";
import AttachmentPicker from "./AttachmentPicker";
import LanguagePicker from "./LanguagePicker/LanguagePicker";
import InputCounter from "./InputCounter";

function Footer({ charCount, setPostState }) {
  return (
    <div className="new-post-dialogue-footer card-footer">
      <AttachmentPicker />
      <LanguagePicker />
      {
        // TODO: fix justify-content
      }

      <div className="contentOptions w-25">
        <InputCounter charCount={charCount} setPostState={setPostState} />
      </div>
    </div>
  );
}

export default Footer;
