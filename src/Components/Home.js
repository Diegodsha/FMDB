import { Switch, Route } from 'react-router-dom';
import App from './App';
import MovieDetails from './MovieDetails';

function Home() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/details/:id" component={MovieDetails} />
    </Switch>
  );
}

export default Home;
