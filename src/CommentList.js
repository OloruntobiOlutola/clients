import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    const { status } = comment;
    if (status === "rejected") {
      content = "This comment has been rejected";
    }
    if (status === "pending") {
      content = "This comment is pending";
    }
    if (status === "approved") {
      content = comment.content;
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
