import React, { useState } from "react";
import LanguagePickerButton from "./LanguagePickerButton";
import LanguagePickerList from "./LanguagePickerList";

function LanguagePicker() {
  const [language, setLanguage] = useState("English");
  const [dropupShown, setDropupShown] = useState(false);

  return (
    <>
      {dropupShown && <LanguagePickerList />}
      <LanguagePickerButton
        selectedLanguage={language}
        dropupShown={dropupShown}
        setDropupShown={setDropupShown}
      />
    </>
  );
}

export default LanguagePicker;
