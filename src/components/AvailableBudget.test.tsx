import { shallow } from 'enzyme';
import AvailableBudget from './AvailableBudget';

it('renders without crashing', () => {
  expect(shallow(
    <AvailableBudget totals={{
      available: '10.00',
      income: '15.00',
      expense: '5.00'
    }} />
  )).toMatchSnapshot();
});
