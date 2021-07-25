import MovieList from '../Containers/MovieList';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>FMDb..</h1>
      <MovieList />
    </div>
  );
}

export default App;
