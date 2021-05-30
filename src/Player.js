import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* SideBar */}
        <Sidebar />

        {/* Body */}
        <Body spotify={spotify} />

        {/* Footer*/}
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
