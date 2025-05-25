import React from "react";
import ProfilePic from "../ProfilePic";
import NewPostButton from "../NewPostDialog/NewPostButton";

function MenuPane({ isDialogVisible, setDialogVisible }) {
  return (
    <div className="menu-pane">
      <ProfilePic handle="emma.psea.social" size="48" />
      <NewPostButton
        isDialogVisible={isDialogVisible}
        setDialogVisible={setDialogVisible}
      />
    </div>
  );
}

export default MenuPane;
