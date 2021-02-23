import { shallow } from 'enzyme';
import AmountDisplay from './AmountDisplay';

it('renders without crashing', () => {
  expect(shallow(<AmountDisplay amount={11.00} color="green" />))
    .toMatchSnapshot();

  expect(shallow(<AmountDisplay amount={20.00} color="red" />))
    .toMatchSnapshot();
});
