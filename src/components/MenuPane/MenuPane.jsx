import React from "react";
import ProfilePic from "../ProfilePic";
import NewPostButton from "../NewPostDialog/NewPostButton";

function MenuPane({ isDialogVisible, setDialogVisible }) {
  return (
    <div className="menu-pane">
      <ProfilePic handle="hans.kisten-und-co-kg.de" size="48" />
      <NewPostButton
        isDialogVisible={isDialogVisible}
        setDialogVisible={setDialogVisible}
      />
    </div>
  );
}

export default MenuPane;
