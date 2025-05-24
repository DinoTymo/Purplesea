import React from "react";
import ImageCard from "./ImageCard";
import Avatar from "../../ProfilePic/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

function Post() {
  return (
    <div className="card mx-auto p-2">
      <div className="card-header post-creator d-flex flex-row mb-3">
        <Avatar /> <strong>&nbsp;&nbsp;&nbsp;username</strong>{" "}
        <p>&nbsp;handle</p> <p>&nbsp;timestamp</p>
      </div>
      <div className="card-body">
        <div className="card-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam
            temporibus doloribus voluptatum delectus officia veniam modi rerum
            possimus, quos tempore. Provident velit blanditiis temporibus natus
            voluptas fugiat consequuntur rem.
          </p>
          <ImageCard />
        </div>
        <div className="card-footer d-flex justify-content-around">
          <button className="btn btn-outline-primary d-flex">
            <FontAwesomeIcon icon={faMessage} />
            <div className="commentCount">0</div>
          </button>
          <button className="btn btn-outline-primary d-flex">
            <FontAwesomeIcon icon={faRepeat} />
            <div className="repostCount">0</div>
          </button>
          <button className="btn btn-outline-primary d-flex">
            <FontAwesomeIcon icon={faHeart} />
            <div className="likeCount">0</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
