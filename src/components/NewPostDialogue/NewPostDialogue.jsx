import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function NewPostDialogue() {
  return (
    <div className="new-post-dialogue card text-bg-dark border border-dark-subtle">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default NewPostDialogue;
