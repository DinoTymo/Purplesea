import React from "react";

function ImageCard(props){
    return(
        <div>
            <img className="card w-100" src={props.src} alt="Birdo" />
        </div>
    );
}

export default ImageCard;