import { shallow } from 'enzyme';
import SavingsBudget from './SavingsBudget';

it('renders without crashing', () => {
  expect(shallow(
    <SavingsBudget />
  )).toMatchSnapshot();
});
