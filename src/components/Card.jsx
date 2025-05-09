import React from "react";
import ImageCard from "./ImageCard";

function Card() {
    return(
        <div className="card-element">
            <div className="post-creator"><strong>username</strong> <p>handle</p> <p>timestamp</p></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam temporibus doloribus voluptatum delectus officia veniam modi rerum possimus, quos tempore. Provident velit blanditiis temporibus natus voluptas fugiat consequuntur rem.</p>
            <ImageCard />
        </div>
    );
}

export default Card;