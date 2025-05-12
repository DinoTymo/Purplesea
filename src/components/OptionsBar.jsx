import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OptionsBar() {
  return (
    <div className="options-bar">
      <FontAwesomeIcon icon="fa-regular fa-image" />
      <i class="bi bi-film"></i>
      <FontAwesomeIcon icon="fa-solid fa-house" />
      <FontAwesomeIcon icon="fa-solid fa-house" />
    </div>
  );
}

export default OptionsBar;
