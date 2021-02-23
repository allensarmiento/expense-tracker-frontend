import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const BudgetForm = styled(Form)`
  padding: 1rem 2rem;
`;

const DateInput = styled(Form.Control)``;

const DescriptionInput = styled(Form.Control)``;

const AmountInput = styled(Form.Control)``;

const AddButton = styled(Button)`
  width: 100%;
`;

type BudgetInputProps = {
  onAddItem: Function;
};

const BudgetInput = ({ onAddItem }: BudgetInputProps) => {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const month = currentDate.getUTCMonth() + 1 < 10
    ? `0${currentDate.getUTCMonth() + 1}`
    : currentDate.getUTCMonth() + 1;
  const day = currentDate.getUTCDate() < 10
    ? `0${currentDate.getUTCDate()}`
    : currentDate.getUTCDate();
  const formattedDate = `${year}-${month}-${day}`;

  const [date, setDate] = useState(formattedDate);
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('food');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addItem = () => {
    if (date && type && category && description && amount) {
      onAddItem({
        date,
        type,
        category,
        description,
        amount: Number.parseFloat(amount) || 0.00
      });

      setDescription('');
      setAmount('');
    }
  };

  return (
    <BudgetForm
      onSubmit={(e: React.FormEvent<HTMLInputElement>) => e.preventDefault()}
    >
      <Form.Row>
        <Col>
          <DateInput
            type="date"
            name="current-date"
            min="1870-01-01"
            max={formattedDate}
            value={date}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setDate(e.currentTarget.value);
            }}
          />
        </Col>
        <Col>
          <Form.Control
            as="select"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="income">(+) Income</option>
            <option value="expense">(-) Expense</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control
            as="select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="rent">Rent</option>
            <option value="utilities">Utilities</option>
            <option value="food">Food</option>
            <option value="drinks">Drinks</option>
          </Form.Control>
        </Col>
        <Col>
          <DescriptionInput
            placeholder="Description"
            value={description}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setDescription(e.currentTarget.value);
            }}
          />
        </Col>
        <Col>
          <AmountInput
            type="number"
            min="0"
            step=".01"
            placeholder="0.00"
            value={amount}
            onChange={(e: React.FormEvent<HTMLInputElement>) => (
              setAmount(e.currentTarget.value)
            )}
          />
        </Col>
        <Col>
          <AddButton variant="primary" onClick={addItem}>Add</AddButton>
        </Col>
      </Form.Row>
    </BudgetForm>
  );
};

export default BudgetInput;
