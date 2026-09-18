import React from "react";
import "./playBtn.css";
import { Play } from "lucide-react";

function PlayBtn({ movie }) {
    return (
        <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? "active" : undefined}`}>
            <a href="/" className="playBtn" aria-label="movie trailer link">
                <Play className="playIcon" />
            </a>
            <p>Watch Trailer</p>
        </div>
    );
}

export default PlayBtn;
