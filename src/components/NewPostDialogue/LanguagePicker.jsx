import React, { useState } from "react";

function LanguagePicker() {
  const [language, setLanguage] = useState("English");
  return (
    <div className="language-picker text-primary fw-bold lh-lg">{language}</div>
  );
}

export default LanguagePicker;
