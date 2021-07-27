import { Switch, Route } from 'react-router-dom';
import App from './App';
import MovieDetails from './MovieDetails';
import SeriesDetails from './SeriesDetails';

function Home() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/details/movie/:id" component={MovieDetails} />
      <Route path="/details/serie/:id" component={SeriesDetails} />
    </Switch>
  );
}

export default Home;
