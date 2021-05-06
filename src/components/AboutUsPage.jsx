import React from "react";
import { Link } from "react-router-dom";

function AboutUsPage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>Sobre nosotros</p>
            <Link className="btn btn-success" to="/">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
