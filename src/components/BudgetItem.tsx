import styled from 'styled-components';

type ColorProps = {
  type: string;
};

const Div = styled.div<ColorProps>`
  display: flex;
  flex-direction: column;
  background-image: ${props => props.type === 'income'
    ? `linear-gradient(
      to right bottom, rgba(0, 128, 0, 0.4), rgba(0, 128, 0, 0.8))`
    : 'none'};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(max-content, 1fr)
                        minmax(20rem, 2fr)
                        minmax(40rem, 2fr)
                        minmax(10rem, 1fr)
                        minmax(4rem,  min-content);
  grid-column-gap: 2rem;
  padding: 1rem 2rem;
  transition: all .1s;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;

export type Item = {
  date: string;
  type: string;
  category: string;
  description: string;
  amount: number;
  fixed: string;
  paid: string;
};

export const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  width: 0;
  color: #fff;
  opacity: 0;
  transition: all .2s;
`;

type BudgetItemProps = {
  item: Item
};

const BudgetItem = ({ item }: BudgetItemProps) => {
  return (
    <Div type={item.type}>
      <Container>
        <span>{item.date}</span>
        <span>{item.category}</span>
        <span>{item.description}</span>
        <span>{item.amount.toFixed(2) || '---'}</span>
        <DeleteButton>Delete</DeleteButton>
      </Container>
    </Div>
  );
};

export default BudgetItem;
