import styled from 'styled-components';
import BudgetItem, { Item } from './BudgetItem';

const Items = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  border: 1px solid var(--color-grey-dark-1);
  border-radius: .4rem;
  font-size: 2rem;
  overflow: auto;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(max-content, 1fr)
                         minmax(20rem, 2fr)
                         minmax(40rem, 2fr)
                         minmax(10rem, 1fr)
                         minmax(4rem,  min-content);
  grid-column-gap: 2rem;
  position: sticky;
  top: 0;
  left: 0;
  padding: 1rem 2rem;
  background: #fff;
  font-weight: 600;
`;

const Heading = styled.span``;

type BudgetItemsProps = {
  items: Array<Item>;
};

const BudgetItems = ({ items }: BudgetItemsProps) => {
  return (
    <Items>
      <Header>
        <Heading>Date</Heading>
        <Heading>Category</Heading>
        <Heading>Description</Heading>
        <Heading>Amount</Heading>
      </Header>
      {items.map((item, index) => (
        <BudgetItem
          key={index}
          item={item}
        />
      ))}
    </Items>
  );
};

export default BudgetItems;
