import { shallow } from 'enzyme';
import BudgetItems from './BudgetItems';

it('renders without crashing', () => {
  expect(shallow(
    <BudgetItems items={[{
      date: '2021-02-22',
      type: 'expense',
      category: 'food',
      description: 'Pizza',
      amount: 19.99,
      fixed: 'yes',
      paid: 'yes'
    }]} />
  )).toMatchSnapshot();
});
