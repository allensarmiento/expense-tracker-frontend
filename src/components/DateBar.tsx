import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { DateFormat } from '../services/format/DateFormat';

const DateContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const ArrowButton = styled(Button)`
  font-size: 3rem;
`;

const Heading = styled.div`
  padding: 1.2rem 1.8rem;
  margin: 0;
  background-color: #fff;
  font-size: 3rem;
`;

type DateProps = {
  year: number;
  month: number;
};

const DateBar = ({ year, month }: DateProps) => {
  const dateFormat = new DateFormat(year, month);

  return (
    <DateContainer>
      <ArrowButton variant="light">&larr;</ArrowButton>
      <Heading>{dateFormat.month} {dateFormat.year}</Heading>
      <ArrowButton variant="light">&rarr;</ArrowButton>
    </DateContainer>
  );
};

export default DateBar;
