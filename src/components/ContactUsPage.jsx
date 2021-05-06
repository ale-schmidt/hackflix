import React from "react";
import { Link } from "react-router-dom";

function ContactUsPage() {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p>Contacto</p>
            <Link className="btn btn-success" to="/">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
