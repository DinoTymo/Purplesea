import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function NewPostDialog({ setDialogVisible, isDialogVisible }) {
  const [postText, setPostText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [postState, setPostState] = useState("disabled");

  function handleInputChange(event) {
    let text = event.target.value;
    setPostText(text);
    setCharCount(text.length);
  }

  return (
    <div className="new-post-dialog card text-bg-dark border border-dark-subtle">
      <Header
        postState={postState}
        charCount={charCount}
        setDialogVisible={setDialogVisible}
        isDialogVisible={isDialogVisible}
      />
      <Body handleInputChange={handleInputChange} postText={postText} />
      <Footer charCount={charCount} setPostState={setPostState} />
    </div>
  );
}

export default NewPostDialog;
