import { shallow } from 'enzyme';
import SpendingCategories from './SpendingCategories';

it('renders without crashing', () => {
  expect(shallow(
    <SpendingCategories categories={{
      food: 20.00,
      rent: 1000.00
    }} />
  )).toMatchSnapshot();
});
