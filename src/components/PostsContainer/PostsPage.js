//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = (props) => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {props.data.map( post => <Post post={post}/>)}
    </div>
  );
};

export default PostsPage;

