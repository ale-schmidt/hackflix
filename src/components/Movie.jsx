import React from "react";
import ModalInfo from "./ModalInfo";
import "./Movie.css";
function Movie({ movie }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="movie-card mb-4 col-md-3">
      <button className="btn" onClick={() => setModalShow(true)}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img className="emptyImage" src="/image-not-available.jpg" alt="" />
        )}
      </button>

      <ModalInfo
        movie={movie}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </div>
  );
}

export default Movie;
