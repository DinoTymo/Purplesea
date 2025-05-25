import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import $ from "jquery";

function NewPostDialog({ setDialogVisible, isDialogVisible }) {
  const [postText, setPostText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [postState, setPostState] = useState("disabled");

  function postPost() {
    const newPost = {
      user: "hans.kisten-und-co-kg.de",
      timestamp: Math.floor(Date.now() / 1000),
      likes: 0,
      reposts: 0,
      comments: 0,
      content: {
        text: postText,
      },
    };

    $.ajax({
      type: "GET",
      url: "/data/posts.json",
      dataType: "json",
      success: function (posts) {
        posts.unshift(newPost);
        console.log(JSON.stringify(posts));

        $.ajax({
          type: "POST",
          url: "/data/posts.json",
          data: JSON.stringify(posts),
          dataType: "json",
          success: function () {
            setDialogVisible(!isDialogVisible);
          },
          error: function () {
            console.error("Failed to post post");
          },
        });
      },
    });
  }

  function handleInputChange(event) {
    let text = event.target.value;
    setPostText(text);
    setCharCount(text.length);
  }

  return (
    <div className="new-post-dialog card text-bg-dark border border-dark-subtle">
      <Header
        postState={postState}
        postPost={postPost}
        setDialogVisible={setDialogVisible}
        isDialogVisible={isDialogVisible}
      />
      <Body handleInputChange={handleInputChange} postText={postText} />
      <Footer charCount={charCount} setPostState={setPostState} />
    </div>
  );
}

export default NewPostDialog;
