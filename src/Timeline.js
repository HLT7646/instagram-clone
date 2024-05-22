import React, { useState } from "react";
import Post from "./Component/Post";
import Suggestions from "./Suggestions";
import { Avatar } from "@mui/material";
import "./Timeline.css";
import imgURL from "./img.jpg";
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "HLT",
      postImage:imgURL,
     
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "HLT",
      postImage:imgURL,
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "HLT",
      postImage:imgURL,
     
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "HLT",
      postImage:imgURL,
      likes: 432,
      timestamp: "2d",
    },
  
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
      <div className="reel">
        <div>
        <Avatar sx={{ width: 66, height: 66 }}>A</Avatar>
        <span>username1</span>
        </div>
        <div>
        <Avatar sx={{ width: 66, height: 66 }}>B</Avatar>
        <span>username2</span>
        </div>
        <div>
        <Avatar sx={{ width: 66, height: 66 }}>C</Avatar>
        <span>username3</span>
        </div>
        <div>
        <Avatar sx={{ width: 66, height: 66 }}>D</Avatar>
        <span>username4</span>
        </div>
        <div>
        <Avatar sx={{ width: 66, height: 66 }}>E</Avatar>
        <span>username5</span>
        </div>
       
        

      </div>
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
