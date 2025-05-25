import React, { useState, useEffect } from "react";
import Post from "./Post/Post";

function PostPane({ handle }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((postResults) => {
        const filtered = handle
          ? postResults.filter((post) => post.user === handle)
          : postResults;
        filtered.sort((a, b) => b.timestamp - a.timestamp);
        setPosts(filtered);
      });
  }, [handle]);

  if (!posts) {
    return null;
  }

  return (
    <div className="post-pane">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
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
