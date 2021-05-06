import styles from "./Header.module.css";

import StarRating from "./StarRating";
import { Link } from "react-router-dom";

function Header({ setInputText, setRate, rate }) {
  // const handleInput = (e) => {
  //   let movie = e.target.value.toLowerCase();
  //   setInputText(movie);
  // };

  return (
    <div>
      <div className={styles["header-image"]}>
        {/* <div className="mask"></div> */}
        <div className="container">
          <nav className="navbar">
            <div className="container-fluid">
              <Link className={`${styles.logo} navbar-brand`} to="/">
                Hackflix
              </Link>
              <div d-flex justify-content-between>
                <Link
                  className={`${styles.logo} navbar-brand`}
                  to="/sobre-nosotros"
                >
                  Sobre nosotros
                </Link>

                <Link className={`${styles.logo} navbar-brand`} to="/contacto">
                  Contacto
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className={styles["header-text"]}>
          <h1 className={styles.title}>
            <strong> ¡Tus películas favoritas!</strong>
          </h1>
          <h3>⥥</h3>

          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <form action="">
                <div className="mb-3 mt-5">
                  <label for="exampleInputEmail1" className="form-label">
                    Buscador
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onInput={(e) => setInputText(e.target.value)}
                  />
                  {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
              </form>
              <div className="startRating">
                <StarRating setRate={setRate} rate={rate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
