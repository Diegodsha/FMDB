import renderer from 'react-test-renderer';
import MovieCard from '../../Components/MovieCard';

describe('MovieCard Component', () => {
  test('Renders correctly component', () => {
    const movie = {
      title: 'movie',
      release_date: '2021',
      vote_average: 5,
      poster_path: '/path',
      id: 123,
    };
    const tree = renderer.create(<MovieCard movie={movie} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
