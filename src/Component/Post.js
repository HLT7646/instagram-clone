import React, { useState } from "react";
import { Avatar, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Post({ user, postImage, likes, timestamp }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const ariaLabel = { 'aria-label': 'description' };
  const data = [1, 2, 3, 4];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="post">
        <div className="post__header">
          <div className="post__headerAuthor">
            <Avatar style={{ marginRight: "10px" }}></Avatar>
            {user} • <span>{timestamp}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="post__image">
          <Slider {...settings}>
            {data.map(() => (
              <img src={postImage} alt="Post Image" width={468} height={585} />
            ))}
          </Slider>
        </div>
        <div className="post__footer">
          <div className="post__footerIcons">
            <div className="post__iconsMain">
              {isLiked ? (
                <FavoriteIcon className="postIcon" onClick={handleLikeClick} />
              ) : (
                <FavoriteBorderIcon
                  className="postIcon"
                  onClick={handleLikeClick}
                />
              )}
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
    </>
  );
}

export default Post;