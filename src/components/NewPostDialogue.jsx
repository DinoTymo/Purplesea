import React, { useState } from "react";
import OptionsBar from "./OptionsBar";

function NewPostDialogue() {
  return (
    <div className="new-post-dialogue">
      <button type="button" className="btn btn-primary">
        Base class
      </button>
      <i class="bi bi-film"></i>
      <OptionsBar />
    </div>
  );
}

export default NewPostDialogue;
