import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import ProfilePic from "../ProfilePic";
import NewPostButton from "../NewPostDialog/NewPostButton";

function MenuPane({ isDialogVisible, setDialogVisible }) {
  return (
    <div className="menu-pane sticky-top">
      <ProfilePic size="48" />
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faHouse} className="sideIcons" /> <strong>&nbsp;Home</strong>
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sideIcons" /> &nbsp;Explore
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faBell} className="sideIcons" /> &nbsp;Notifications
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faCommentDots} className="sideIcons" /> &nbsp;Chat
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faHashtag} className="sideIcons" /> &nbsp;Feeds
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faListUl} className="sideIcons" /> &nbsp;Lists
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faCircleUser} className="sideIcons" /> &nbsp;Profile
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faGear} className="sideIcons" /> &nbsp;Settings
      </a>
      <br />

      <NewPostButton
        isDialogVisible={isDialogVisible}
        setDialogVisible={setDialogVisible}
      />
    </div>
  );
}

export default MenuPane;
