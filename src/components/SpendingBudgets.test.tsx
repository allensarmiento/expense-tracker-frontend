import { shallow } from 'enzyme';
import SpendingBudgets from './SpendingBudgets';

it('renders without crashing', () => {
  expect(shallow(
    <SpendingBudgets />
  )).toMatchSnapshot();
});
