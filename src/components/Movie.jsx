import React from "react";
import ModalInfo from "./ModalInfo";
import "./Movie.css";
function Movie({ movie }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="movie-card mb-4 col-md-3">
      <button className="btn" onClick={() => setModalShow(true)}>
        {movie.poster_path ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              onLoad={() => setIsLoading(false)}
            />
            {isLoading && (
              <div>
                <div class="d-flex justify-content-center align-items-center spinner">
                  <div class="spinner-border " role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            )}
          </>
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
