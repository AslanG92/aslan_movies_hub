import React from "react";
import "./movieContent.css";
import titleImg from "../images/boys_title.png";
import Button from "./Button";
import { Bookmark } from "lucide-react";
import { Plus } from "lucide-react";

function MovieContent() {
  return (
    <div className="content active">
      <img src={titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>
          <i>age</i>
        </span>
        <span>length</span>
        <span>category</span>
      </h4>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nisi ut
        quis voluptatibus beatae cupiditate fugit sint tenetur dolor maiores eos
        hic sit velit, eum ullam aliquam deleniti, quibusdam iste consectetur
        dignissimos! Soluta voluptas a quis quod aliquam blanditiis perferendis
        doloribus voluptates corporis explicabo quisquam, in iure? Eaque, odit
        assumenda?
      </p>

      <div className="button">
        <Button
          icon={<Bookmark />}
          name="Book"
          color="#ff3700"
          bgColor="#fff"
        />
        <Button icon={<Plus />} name="My List" />
      </div>
    </div>
  );
}

export default MovieContent;
