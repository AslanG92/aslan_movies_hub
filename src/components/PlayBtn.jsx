import React from "react";
import "./playBtn.css";
import { Play } from "lucide-react";

function PlayBtn() {
  return (
    <div className="trailer d-flex align-items-center justify-content-center active">
      <a href="/" className="playBtn">
        <Play className="playIcon" />
      </a>
      <p>Watch Trailer</p>
    </div>
  );
}

export default PlayBtn;
