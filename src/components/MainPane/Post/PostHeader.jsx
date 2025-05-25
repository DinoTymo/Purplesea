import React, { useState, useEffect } from "react";
import ProfilePic from "../../ProfilePic";

function PostHeader(props) {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((userResults) => {
        const foundUser = userResults.find(
          (userResult) => userResult.handle === props.handle,
        );
        setUsername(foundUser.name);
      });
  }, [props.handle]);

  if (!username) return null;

  return (
    <div className="card-header post-creator d-flex flex-row mb-3">
      <ProfilePic handle={props.handle} size="42" />
      <div className="fw-bold ms-2">{username}</div>
      <div className="text-secondary ms-1">@{props.handle}</div>
      <div className="text-secondary ms-1">·</div>
      <div className="text-secondary ms-1">{props.timestamp}</div>
    </div>
  );
}

export default PostHeader;
