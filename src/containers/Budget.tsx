import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DateBar from '../components/DateBar';
import SpendingCategories from '../components/SpendingCategories';
import SavingsBudget from '../components/SavingsBudget';
import SpendingBudgets from '../components/SpendingBudgets';
import AvailableBudget, { Totals } from '../components/AvailableBudget';
import BudgetItems from '../components/BudgetItems';
import BudgetInput from '../components/BudgetInput';
import { Item } from '../components/BudgetItem';

const Banner = styled.div`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, mincontent));
  grid-template-rows: 100%;
  grid-auto-flow: column;
  grid-auto-columns: minmax(30rem, min-content);
  grid-gap: 2rem;
  padding: 2rem;
  font-size: 2rem;
  background-color: var(--top-banner-bg-color);
  overflow-x: auto;
`;

type Categories = {
  [key: string]: number;
};

const Budget = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [items, setItems] = useState<Array<Item>>([]);
  
  useEffect(() => {
    // Fetch Data Here
  }, []);

  const getCategories = () => {
    const categories: Categories = {};
    items.forEach(item => {
      if (item.type === 'expense' && item.category) {
        const categoryLowercase = item.category.toLowerCase();
        if (categoryLowercase in categories) {
          categories[categoryLowercase] += item.amount;
        } else {
          categories[categoryLowercase] = item.amount;
        }
      }
    });
    for (let key in categories) {
      categories[key] = Number.parseFloat(categories[key].toFixed(2));
    }
    return categories;
  };

  const calculateTotals = (): Totals => {
    const income = items.reduce((accumulator, item) => {
      return item.type === 'income'
        ? item.amount + accumulator
        : accumulator + 0;
    }, 0.00);
    
    const expense = items.reduce((accumulator, item) => {
      return item.type === 'expense'
        ? item.amount + accumulator
        : accumulator + 0;
    }, 0.00);

    return {
      available: (income - expense).toFixed(2),
      income: income.toFixed(2),
      expense: expense.toFixed(2)
    };
  };

  const onAddItem = (item: Item) => {
    setItems(items => {
      return [ ...items, item ];
    });
  };

  return (
    <div>
      {/* <DateBar year={year} month={month} /> */}
      <Banner>
        <SpendingCategories categories={getCategories()} />
        {/* <SavingsBudget /> */}
        {/* <SpendingBudgets /> */}
        <AvailableBudget totals={calculateTotals()} />
      </Banner>
      <main>
        <BudgetInput onAddItem={onAddItem} />
        <BudgetItems items={items}/>
      </main>
    </div>
  );
};

export default Budget;
