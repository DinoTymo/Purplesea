import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons"

function OptionsBar() {
  return (
    <div className="options-bar">
      <i class="bi bi-film"></i>
      <i class="bi bi-image"></i>
      <FontAwesomeIcon icon={faImage} />
    </div>
  );
}

export default OptionsBar;
