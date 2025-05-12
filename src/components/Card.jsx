import React from "react";
import ImageCard from "./ImageCard";

function Card() {
    return(
        <div className="card mx-auto p-2">
            <div className="card-header post-creator d-flex flex-row mb-3">
                <strong>username</strong> <p>handle</p> <p>timestamp</p>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam temporibus doloribus voluptatum delectus officia veniam modi rerum possimus, quos tempore. Provident velit blanditiis temporibus natus voluptas fugiat consequuntur rem.</p>
                    <ImageCard />
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-primary">
                        like
                    </button>
                    <button className="btn btn-outline-primary">
                        repost
                    </button>
                    <button className="btn btn-outline-primary">
                        comment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;