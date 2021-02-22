import styled from 'styled-components';

type ColorProps = {
  color: string;
};

const Div = styled.div<ColorProps>`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .6rem 0;
  padding: .6rem .8rem;
  background-color: ${props => props.color === 'green'
    ? 'rgba(0, 128, 0, .5)' : 'rgba(255, 0, 0, .5)'};
  border-radius: .4rem;
  box-shadow: 0 .1rem .4rem rgba(0, 0, 0, .7);
`;

const Amount = styled.span<ColorProps>`
  padding: .4rem .8rem;
  background-color: ${props => props.color === 'green'
    ? 'rgba(0, 128, 0, .7)' : 'rgba(222, 3, 3, .7)'};
  border-radius: .4rem;
  box-shadow: 0 .1rem .4rem rgba(0, 0, 0, .7);
`;

type AmountDisplayProps = {
  amount: number | string;
  color: 'green' | 'red';
};

const AmountDisplay = ({ amount, color }: AmountDisplayProps) => {
  return (
    <Div color={color}>
      <span>{color === 'green' ? 'Income' : 'Expense'}:</span>&nbsp;
      <Amount color={color}>${amount}</Amount>
    </Div>
  );
};

export default AmountDisplay;
