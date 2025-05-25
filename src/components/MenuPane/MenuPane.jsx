import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import NewPostButton from "../NewPostDialog/NewPostButton";

function MenuPane({ isDialogVisible, setDialogVisible }) {
  return (
    <div className="menu-pane">
      <ProfilePic size="48" />
      <NewPostButton
        isDialogVisible={isDialogVisible}
        setDialogVisible={setDialogVisible}
      />
    </div>
  );
}

export default MenuPane;
