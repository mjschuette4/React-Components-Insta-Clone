// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  const [comments, setComments] = useState(props.comments);
  
  return (
    <div>
       {comments.map((comment, key) => {
        return <Comment comment={comment} key={key} />;
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
