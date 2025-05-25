import React, {useState, useEffect} from "react";
import ImageCard from "./ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import ProfilePic from "../../ProfilePic";

function Post(props) {
  const [user, setUser] = useState(null);

  const [commented, setCommented] = useState(false);
  const [commentCount, setCommentCount] = useState(props.comments);
  
  const [reposted, setReposted] = useState(false);
  const [repostCount, setRepostCount] = useState(props.reposts);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likes);

  useEffect(()=>{
    fetch("/data/users.json")
      .then((response)=>
        response.json()
      )
      .then((userResults)=>{
        const foundUser = userResults.find((userResult) => userResult.handle === props.handle);
        setUser(foundUser);
      });        
  }, []);
  
  const handleRepostClick = () => {
    if (reposted) {
      setRepostCount(repostCount - 1);
      setReposted(false);
    } else {
      setRepostCount(repostCount + 1);
      setReposted(true);
    }
  };

  const handleCommentClick = () => {
    if (commented) {
      setCommentCount(commentCount - 1);
      setCommented(false);
    } else {
      setCommentCount(commentCount + 1);
      setCommented(true);
    }
  };

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  if(!user){
    return null;
  } 

  return (
    <div className="card mx-auto p-2 text-bg-dark border border-dark-subtle">
      <div className="card-header post-creator d-flex flex-row mb-3">
        <ProfilePic handle={props.handle} size="42"/> <strong>&nbsp;&nbsp;&nbsp;{props.username}</strong>
        <p>&nbsp;{props.handle}</p> <p>&nbsp;{props.timestamp}</p>
      </div>
      <div className="card-body">
        <div className="card-text">
          <p>
            {props.content.text}
          </p>
          {props.content.attachment && <ImageCard src={props.content.attachment}/>}
        </div>
        <div className="card-footer d-flex justify-content-around">
          <button className={`btn btn-outline-primary d-flex${commented ? " active" : ""}`} onClick={handleCommentClick}>
            <FontAwesomeIcon icon={faMessage} />
            <div className="commentCount">{commentCount}</div>
          </button>
          <button className={`btn btn-outline-primary d-flex${reposted ? " active" : ""}`} onClick={handleRepostClick}>
            <FontAwesomeIcon icon={faRepeat} />
            <div className="repostCount">{repostCount}</div>
          </button>
          <button className={`btn btn-outline-primary d-flex ${liked ? " active" : ""}`} onClick={handleLikeClick}>
            <FontAwesomeIcon icon={faHeart} />
            <div className="likeCount">{likeCount}</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
