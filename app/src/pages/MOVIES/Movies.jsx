import React from "react";
import { useState, useEffect } from "react";
import { getMovie } from "../../services/API";
import { Link } from "react-router-dom";
import "./styles.css";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(`http://localhost:8080/entries`);
      const res = await data.json();
      const movies = res.filter((movie) => movie.programType == "movie");
      setMoviesList(movies);
    })();
  }, []);

  return (
    <div>
      <h1> MOVIES</h1>
      <ul>
        {moviesList.map((movie) => (
          <li key={movie.title}>
            <h3>{movie.title}</h3>
            <Link to={`/series/${movie.title}`}>
              <img
                src={movie.images["Poster Art"].url}
                alternative={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;