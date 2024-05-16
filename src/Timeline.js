import React, { useState } from "react";
import Post from "./Component/Post";
import Suggestions from "./Suggestions";
import { Avatar } from "@mui/material";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "HLT",
      postImage:
      "https://scontent.cdninstagram.com/v/t39.30808-6/441318901_18415423714064311_4260111182971927085_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=0wXdSVvl6hYQ7kNvgHCmLGF&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM2Nzg0NjM4OTM2NjAzNjg2MQ%3D%3D.2-ccb7-5&oh=00_AYC27DE6bFr4YYdTZ93I-ouKZKqvA416HXxUZtT-VFidPw&oe=664B3C3A&_nc_sid=10d13b",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "HLT",
      postImage:
      "https://scontent.cdninstagram.com/v/t39.30808-6/441318901_18415423714064311_4260111182971927085_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=0wXdSVvl6hYQ7kNvgHCmLGF&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM2Nzg0NjM4OTM2NjAzNjg2MQ%3D%3D.2-ccb7-5&oh=00_AYC27DE6bFr4YYdTZ93I-ouKZKqvA416HXxUZtT-VFidPw&oe=664B3C3A&_nc_sid=10d13b",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "HLT",
      postImage:
      "https://scontent.cdninstagram.com/v/t39.30808-6/441318901_18415423714064311_4260111182971927085_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=0wXdSVvl6hYQ7kNvgHCmLGF&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM2Nzg0NjM4OTM2NjAzNjg2MQ%3D%3D.2-ccb7-5&oh=00_AYC27DE6bFr4YYdTZ93I-ouKZKqvA416HXxUZtT-VFidPw&oe=664B3C3A&_nc_sid=10d13b",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "HLT",
      postImage:
      "https://scontent.cdninstagram.com/v/t39.30808-6/441318901_18415423714064311_4260111182971927085_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=0wXdSVvl6hYQ7kNvgHCmLGF&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM2Nzg0NjM4OTM2NjAzNjg2MQ%3D%3D.2-ccb7-5&oh=00_AYC27DE6bFr4YYdTZ93I-ouKZKqvA416HXxUZtT-VFidPw&oe=664B3C3A&_nc_sid=10d13b",
      likes: 14,
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
