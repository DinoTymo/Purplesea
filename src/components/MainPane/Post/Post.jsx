import React from "react";
import ImageCard from "./ImageCard";
import Avatar from "../../ProfilePic/ProfilePic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

function Post(props) {
  return (
    <div className="card mx-auto p-2 text-bg-dark border border-dark-subtle">
      <div className="card-header post-creator d-flex flex-row mb-3">
        <Avatar /> <strong>&nbsp;&nbsp;&nbsp;{props.username}</strong>
        <p>&nbsp;{props.handle}</p> <p>&nbsp;{props.timestamp}</p>
      </div>
      <div className="card-body">
        <div className="card-text">
          <p>
            {props.content}
          </p>
          <ImageCard />
        </div>
        <div className="card-footer d-flex justify-content-around">
          <button className="btn btn-outline-primary d-flex">
            <FontAwesomeIcon icon={faMessage} />
            <div className="commentCount">{props.comments}</div>
          </button>
          <button className="btn btn-outline-primary d-flex">
            <FontAwesomeIcon icon={faRepeat} />
            <div className="repostCount">{props.reposts}</div>
          </button>
          <button className="btn btn-outline-primary d-flex">
            <FontAwesomeIcon icon={faHeart} />
            <div className="likeCount">{props.likes}</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
