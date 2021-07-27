import renderer from 'react-test-renderer';
import Carousel from '../../Components/Carousel';

describe('Carousel Component', () => {
  test('Renders correctly component', () => {
    const tree = renderer.create(<Carousel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
