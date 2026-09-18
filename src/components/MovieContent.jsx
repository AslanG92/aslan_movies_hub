import React from "react";
import "./movieContent.css";
import Button from "./Button";
import { Bookmark } from "lucide-react";
import { Plus } from "lucide-react";

function MovieContent({ movie }) {
    return (
        <div className={`content ${movie.active ? "active" : undefined}`}>
            <img src={movie.titleImg} alt="Movie Title" className="movie-title" />

            <h4>
                <span>{movie.year}</span>
                <span><i>{movie.ageLimit}</i></span>
                <span>{movie.length}</span>
                <span>{movie.category}</span>
            </h4>

            <p>{movie.description}</p>

            <div className="button">
                <Button icon={<Bookmark />} name="Book" color="#ff3700" bgColor="#fff" />
                <Button icon={<Plus />} name="My List" />
            </div>
        </div>
    );
}

export default MovieContent;
