import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import GifIcon from "./icons/GifIcon";

function OptionsBar() {
  return (
    <div className="options-bar">
      <i class="bi bi-image text-primary"></i>
      <i class="bi bi-film text-primary"></i>
      <GifIcon width="2" height="2" />
    </div>
  );
}

export default OptionsBar;
