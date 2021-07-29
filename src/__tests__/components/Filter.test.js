import renderer from 'react-test-renderer';
import GenreFilter from '../../Components/GenreFilter';

describe('Filter Component', () => {
  test('Renders correctly component', () => {
    const handleFilterChange = (e) => e;
    const tree = renderer.create(<GenreFilter handleFilterChange={handleFilterChange} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
