import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import $ from "jquery";

function PostBody(props) {
  const [user, setUser] = useState(null);

  const [commented, setCommented] = useState(false);
  const [commentCount, setCommentCount] = useState(props.comments);

  const [reposted, setReposted] = useState(false);
  const [repostCount, setRepostCount] = useState(props.reposts);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likes);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((userResults) => {
        const foundUser = userResults.find(
          (userResult) => userResult.handle === props.handle,
        );
        setUser(foundUser);
      });
  }, []);

  function handleCommentClick() {
    const newCommentCount = commented ? commentCount - 1 : commentCount + 1;
    setCommentCount(newCommentCount);
    updateCounterOnServer("comments", newCommentCount);
    setCommented(!commented);
  }

  function handleRepostClick() {
    const newRepostCount = reposted ? repostCount - 1 : repostCount + 1;
    setRepostCount(newRepostCount);
    updateCounterOnServer("reposts", newRepostCount);
    setReposted(!reposted);
  }

  function handleLikeClick() {
    const newLikeCount = liked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    updateCounterOnServer("likes", newLikeCount);
    setLiked(!liked);
  }

  function updateCounterOnServer(counterType, newValue) {
    $.ajax({
      type: "PATCH",
      url: `http://localhost:3001/posts/${props.id}`,
      data: JSON.stringify({ [counterType]: newValue }),
      dataType: "json",
      contentType: "application/json",
      success: function () {},
      error: function () {
        console.error(`Failed to update ${counterType}`);
      },
    });
  }

  if (!user) return null;

  return (
    <div className="card-body">
      <div className="card-text">
        <p>{props.content.text}</p>
        {props.content.attachment && (
          <ImageCard src={props.content.attachment} />
        )}
      </div>
      <div className="card-footer d-flex justify-content-around">
        <button
          className={`btn btn-outline-primary d-flex${
            commented ? " active" : ""
          }`}
          onClick={handleCommentClick}
        >
          <FontAwesomeIcon icon={faMessage} />
          <div className="commentCount">{commentCount}</div>
        </button>
        <button
          className={`btn btn-outline-primary d-flex${
            reposted ? " active" : ""
          }`}
          onClick={handleRepostClick}
        >
          <FontAwesomeIcon icon={faRepeat} />
          <div className="repostCount">{repostCount}</div>
        </button>
        <button
          className={`btn btn-outline-primary d-flex ${liked ? " active" : ""}`}
          onClick={handleLikeClick}
        >
          <FontAwesomeIcon icon={faHeart} />
          <div className="likeCount">{likeCount}</div>
        </button>
      </div>
    </div>
  );
}

export default PostBody;
