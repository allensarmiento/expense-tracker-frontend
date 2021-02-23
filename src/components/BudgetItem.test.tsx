import { shallow } from 'enzyme';
import BudgetItem from './BudgetItem';

it('renders without crashing', () => {
  expect(shallow(
    <BudgetItem item={{
      date: '2021-02-22',
      type: 'expense',
      category: 'food',
      description: 'Pizza',
      amount: 19.99,
      fixed: 'yes',
      paid: 'yes'
    }} />
  )).toMatchSnapshot();

  expect(shallow(
    <BudgetItem item={{
      date: '2021-02-22',
      type: 'expense',
      category: 'food',
      description: 'Pizza',
      amount: 0,
      fixed: 'yes',
      paid: 'yes'
    }} />
  )).toMatchSnapshot();
});
