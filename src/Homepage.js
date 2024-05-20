import React from "react";
import "./Homepage.css";
import Sidenav from "./Sidenav";
import Timeline from "./Timeline";
import BottomNav from "./BottomNav";
function Homepage() {
  return (
      
    <><div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>

    </div><div className="homepage__bottomnav">
        <BottomNav />
      </div></>
  );
}

export default Homepage;
