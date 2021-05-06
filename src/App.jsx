import "./App.css";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MoviePage from "./components/MoviePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import Error404page from "./components/Error404page";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pelicula/:id" component={MoviePage} />
          <Route path="/sobre-nosotros" component={AboutUsPage} />
          <Route path="/contacto" component={ContactUsPage} />

          {/* <Redirect from = "/movie/:id” to= "pelicula/:id" /> */}

          <Route component={Error404page} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
