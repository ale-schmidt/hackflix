import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/MoviePage.css";

function MoviePage({ match }) {
  const [selectedMovie, setSelectedMovie] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=4203e26fc950856ad43f64271db2155f`;
    const getData = async () => {
      const response = await axios.get(URL);

      setSelectedMovie(response.data);
      setisLoading(false);
    };

    getData();
  }, [match.params.id]);

  return (
    <>
      {!isLoading ? (
        <div>
          <div className="container d-flex justify-content-center mt-5">
            <div className="row moviePageCard text-center d-flex justify-content-center">
              <h1 className="titleMoviePage m-4"> {selectedMovie.title}</h1>{" "}
              <div className="col-md-4 text-center">
                {selectedMovie.poster_path ? (
                  <img
                    className="moviePagePicture"
                    src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                  />
                ) : (
                  <img
                    className="moviePagePicture"
                    src="/public/image-not-available.jpg"
                    alt=""
                  />
                )}

                <hr />
                <Link className="btn btn-success m-3" to="/">
                  Volver
                </Link>
              </div>
              <div className="col-md-4 text-left">
                <p>{selectedMovie.overview}</p>
                <p>
                  <strong>Fecha de publicación</strong>:{" "}
                  {selectedMovie.release_date}
                </p>
                <p>
                  <strong>Rating</strong>: {selectedMovie.vote_average}
                </p>
                <p>
                  <strong>Número de votos</strong>: {selectedMovie.vote_count}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div class="d-flex justify-content-center align-items-center spinner">
            <div class="spinner-border " role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePage;
