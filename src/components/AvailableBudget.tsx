import styled from 'styled-components';
import BannerSection from './BannerSection';
import BannerTitle from './BannerTitle';
import AmountDisplay from './AmountDisplay';

const Total = styled.div`
  font-size: 3.5rem;
  text-align: center;
`;

const Detail = styled.div`
  width: 100%;
`;

export type Totals = {
  available: string;
  income: string;
  expense: string;
};

type AvailableBudgetProps = {
  totals: Totals;
};

const AvailableBudget = ({ totals }: AvailableBudgetProps) => {
  return (
    <BannerSection justifyContent="space-between">
      <BannerTitle>Total Available Budget</BannerTitle>
      <Total>${totals.available}</Total>
      <Detail>
        <AmountDisplay amount={totals.income} color="green" />
        <AmountDisplay amount={totals.expense} color="red" />
      </Detail>
    </BannerSection>
  );
};

export default AvailableBudget;
