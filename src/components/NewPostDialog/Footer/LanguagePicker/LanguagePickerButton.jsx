import React from "react";

function LanguagePickerButton({
  dropupShown,
  setDropupShown,
  selectedLanguage,
}) {
  return (
    <button
      className="language-picker btn text-primary fw-bold lh-sm border-0"
      type="button"
      onClick={() => {
        setDropupShown(!dropupShown);
      }}
    >
      {selectedLanguage}
    </button>
  );
}

export default LanguagePickerButton;
