import React, { useState, useEffect } from "react";
import "./banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        {/* <img src="" alt="Background Image" className="bgImg" /> */}
      </div>
    </div>
  );
}

export default Banner;
