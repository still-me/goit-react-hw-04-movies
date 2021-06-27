import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";

import routes from "./routes";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "movie-details" */)
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />

        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);
export default App;
