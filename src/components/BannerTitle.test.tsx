import { shallow } from 'enzyme';
import BannerTitle from './BannerTitle';

it('renders without crashing', () => {
  expect(shallow(<BannerTitle/>)).toMatchSnapshot();

  expect(shallow(<BannerTitle>Title</BannerTitle>)).toMatchSnapshot();
});
