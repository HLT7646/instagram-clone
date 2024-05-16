import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar sx={{ width: 44, height: 44 }} />
          </span>
          <div className="username__info">
            <span className="username">Ha Pham</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__button" style={{ marginBottom: "50px" }}>Switch</button>
      </div>
      <div className="suggestions__title">Suggested for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar sx={{ width: 44, height: 44 }} />
            </span>
            <div className="username__info">
              <span className="username">Ha Pham</span>
              <span className="relation">Suggested for you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar sx={{ width: 44, height: 44 }}/>
            </span>
            <div className="username__info">
              <span className="username">Ha Pham</span>
              <span className="relation">Suggested for you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar sx={{ width: 44, height: 44 }} />
            </span>
            <div className="username__info">
              <span className="username">Ha Pham</span>
              <span className="relation">Suggested for you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar sx={{ width: 44, height: 44 }}/>
            </span>
            <div className="username__info">
              <span className="username">Ha Pham</span>
              <span className="relation">Suggested for you</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="more__info">
          <p className="more__icon">
            About.
            Help.
            Press.
            API.
            Jobs.
            Privacy.
            Terms.
            Locations.
            Language.
            Meta Verified
          </p>
          <span>
            © 2024 INSTAGRAM FROM META
          </span>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
