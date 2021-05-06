import React from "react";
import "./Movies.css";
// import movies from "../movies.js";
import Movie from "./Movie";
import axios from "axios";

function Movies({ inputText, rate }) {
  const [movies, setMovies] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    const url = inputText
      ? `https://api.themoviedb.org/3/search/movie?api_key=4203e26fc950856ad43f64271db2155f&language=en-US&query=${inputText}&page=${pageNumber}&include_adult=false`
      : `https://api.themoviedb.org/3/discover/movie?api_key=4203e26fc950856ad43f64271db2155f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&vote_average.gte=${
          rate * 3
        }&with_watch_monetization_types=flatrate`;

    const getData = async () => {
      const response = await axios.get(url);

      setMovies(response.data.results);
    };
    setPageNumber();
    getData();
  }, [inputText, pageNumber, rate]);

  // React.useEffect(() => {
  //   setPageNumber(1);
  // }, [inputText, rate]);

  const filteredMovies =
    movies &&
    movies
      .filter(
        (movie) =>
          movie.title.toLowerCase().includes(inputText.toLowerCase()) &&
          movie.vote_average >= rate * 2
      )
      .map((movie) => <Movie movie={movie} key={movie.id} />);

  return (
    <div className="container mt-4">
      <div className="row g-0 movieList justify-content-around">
        {/* <div className="col-xl-3 mb-3"> */}
        {filteredMovies && filteredMovies.length ? (
          filteredMovies
        ) : (
          <p>No hay películas para mostrar</p>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Movies;
