import React, { useState } from "react";
import "../App.css";
import NewReleases from "../components/NewReleases/NewReleases";
import ActionAdventure from "../components/ActionAdventure/ActionAdventure";
import ScifiHorror from "../components/ScifiHorror/ScifiHorror";
import Footer from "../components/Footer/Footer";
import Banar from "../components/Banar/Banar";
import ChildrenFamily from "../components/ChildrenFamily/ChildrenFamily";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/original";
const Home = ({ setGetMovieId }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);

  return (
    <div className="app">
      <Banar />
      {movies ? (
        <div className="row1">
          <h2>{text ? `what you looking for : ${text}` : ""}</h2>
          <div className="row_posters1">
            {movies.map((actionMovie) => {
              return (
                <Link
                  to={`/movie/${
                    actionMovie?.title ||
                    actionMovie?.name ||
                    actionMovie?.orignal_name
                  }`}
                >
                  <img
                    onClick={() => setGetMovieId(actionMovie.id)}
                    key={actionMovie.id}
                    className="row_poster1"
                    src={`${imgUrl}${actionMovie.poster_path}`}
                    alt={actionMovie.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}

      <NewReleases setGetMovieId={setGetMovieId} />
      <ActionAdventure setGetMovieId={setGetMovieId} />
      <ScifiHorror setGetMovieId={setGetMovieId} />
      <ChildrenFamily setGetMovieId={setGetMovieId} />
      <Footer />
    </div>
  );
};

export default Home;
