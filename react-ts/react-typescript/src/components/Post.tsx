import React, { useState } from "react";

type PostProps = {
  userId?: number;
  id?: number;  
  title: string;
  body: string;
};
const Post = ({ title, body }: PostProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
