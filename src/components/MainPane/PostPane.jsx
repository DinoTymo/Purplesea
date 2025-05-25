import React, {useState, useEffect} from "react";
import Post from "./Post/Post";

function PostPane() {
  console.log("hi");
  
  const [posts, setPost] = useState(null);
  useEffect(()=>{
    fetch("/data/posts.json")
      .then((response)=>
        response.json()
      )
      .then((postResults)=>{
        setPost(postResults);
      })
  }, []);
  
  if(!posts){
    return null;
  }  

  return (    
    <div className="post-pane">
      {posts.map((post) => (
        <Post 
          key={self.crypto.randomUUID()}
          handle={post.user} 
          timestamp={post.timestamp} 
          content={post.content} 
          comments={post.comments} 
          reposts={post.reposts} 
          likes={post.likes} 
        />
      ))}
    </div>
  );  
}

export default PostPane;
