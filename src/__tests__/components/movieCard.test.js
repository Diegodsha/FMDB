/* eslint-disable no-console */
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MovieCard from '../../Components/MovieCard';

Enzyme.configure({ adapter: new Adapter() });

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});

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

  test('dont render component if no movie is passed', () => {
    mount(<MovieCard />);
    expect(console.error).toHaveBeenCalledTimes(2);
  });
});
