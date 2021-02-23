import { shallow } from 'enzyme';
import BudgetInput from './BudgetInput';

const onAddItem = jest.fn();

it('renders without crashing', () => {
  expect(shallow(
    <BudgetInput onAddItem={onAddItem} />
  )).toMatchSnapshot();

  // Test for input and sumbit clicked
});
