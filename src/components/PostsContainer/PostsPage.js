//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = props => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {props.data.map((item, index) => {
        return <Post key={index} post={item}/>;
      })}
    </div>
  );
};

export default PostsPage;

