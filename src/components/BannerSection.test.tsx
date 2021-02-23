import { shallow } from 'enzyme';
import BannerSection from './BannerSection';

it('renders without crashing', () => {
  expect(shallow(<BannerSection />)).toMatchSnapshot();

  expect(shallow(<BannerSection justifyContent="space-between" />))
    .toMatchSnapshot();

  expect(shallow(<BannerSection>Test</BannerSection>))
    .toMatchSnapshot();
});
