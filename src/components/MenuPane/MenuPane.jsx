import React from "react";
import ProfilePic from "../ProfilePic";
import NewPostButton from "../NewPostDialog/NewPostButton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHashtag,
  faListUl,
  faMagnifyingGlass,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCircleUser,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";

function MenuPane({ isDialogVisible, setDialogVisible }) {
  return (
    <div className="menu-pane sticky-top">
      <ProfilePic handle="hans.kisten-und-co-kg.de" size="48" />
      <br />
      <Link to="/" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faHouse} className="sideIcons" />{" "}
        <strong>&nbsp;Home</strong>
      </Link>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sideIcons" />{" "}
        &nbsp;Explore
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faBell} className="sideIcons" />{" "}
        &nbsp;Notifications
      </a>
      <br />
      <a href="#" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faCommentDots} className="sideIcons" />{" "}
        &nbsp;Chat
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
      <Link to="/profile" className="link-underline link-underline-opacity-0">
        <FontAwesomeIcon icon={faCircleUser} className="sideIcons" />{" "}
        &nbsp;Profile
      </Link>
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
