import React, {useState, useEffect} from "react";
import Post from "./Post/Post";

function PostPane() {
  console.log("hi");
  
  const [post, setPost] = useState(null);
  useEffect(()=>{
    fetch("/data/posts.json")
      .then((response)=>{
        response.json();
        console.log(response);
      })
      .then((posts)=>{
        setPost(posts);
      })
  });
  
  if(!post){
    return null;
  }  

  return (    
    <div className="post-pane">
      <p>muhahahahah</p>
      <Post username="urmum" handle={post[0].user} timestamp="2 Std." content="das in der json halt" comments="154" reposts="10" likes="354" />
      <Post username="urmum" handle="urmum@psea.social" timestamp="2 Std." content="das in der json halt" comments="74" reposts="2" likes="98" />
      <Post username="urmum" handle="urmum@psea.social" timestamp="2 Std." content="das in der json halt" comments="45" reposts="68" likes="451" />
    </div>
  );  
}

export default PostPane;
