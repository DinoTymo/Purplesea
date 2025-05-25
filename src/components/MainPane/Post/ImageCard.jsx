import React from "react";

function ImageCard(props) {
  return (
    <div>
      <img
        className="card w-100"
        src={props.src}
        alt="The user hasn't provided any alt-text."
      />
    </div>
  );
}

export default ImageCard;
