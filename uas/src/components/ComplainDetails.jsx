import React from "react";

const PostDetails = (props) => {
  
  return(
  <div className="blog-list-item" >
      <div className="blog-list-item-title">{props.data.topic}</div>
      <div className="blog-list-item-byline">
        <span className="blog-list-item-byline-author"> {props.data.username} </span>
        {props.data.topic}
      </div>
      <div className="blog-list-item-lede"> {props.data.content} </div>
     
    </div>
);}

export default ComplainDetails;