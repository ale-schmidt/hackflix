import React from "react";
import Modal from "react-bootstrap/Modal";
import "./ModalInfo.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router";

function ModalInfo({ movie, modalShow, setModalShow }) {
  // const { slug } = useParams();
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => setModalShow(false)}
    >
      <Modal.Header closeButton>
        {" "}
        <p className="modalTitle">{movie.title}</p>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row ">
            <div className="col-6 pl-0 pr-2">
              {movie.poster_path ? (
                <img
                  className="moviePagePicture"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img
                  className="moviePagePicture"
                  src="/image-not-available.jpg"
                  alt=""
                />
              )}
            </div>
            <div className="col-6">
              <p>
                <strong>Resumen</strong>: {movie.overview}
              </p>
              <p>
                <strong>Fecha de publicación</strong>: {movie.release_date}
              </p>
              <p>
                <strong>Rating</strong>: {movie.vote_average}
              </p>
              <p>
                <strong>Número de votos</strong>: {movie.vote_count}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Link className="btn btn-success" to={`/pelicula/${movie.id}`}>
          Info
        </Link>
        <button
          className="btn btn-secondary"
          onClick={() => setModalShow(false)}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;
