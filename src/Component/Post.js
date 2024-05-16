import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp }) {
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
          </Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" width={468} height={585}/>
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
       <b>38,250 likes</b> 
       
      </div>
    </div>
  );
}

export default Post;
