import { shallow } from 'enzyme';
import DateBar from './DateBar';

it('renders without crashing', () => {
  expect(shallow(
    <DateBar year={2021} month={2} />
  )).toMatchSnapshot();
});
