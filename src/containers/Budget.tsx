import { useState, useEffect, ReactChild } from 'react';
import styled from 'styled-components';
import DateBar from '../components/DateBar';
import TopBanner from '../components/TopBanner';
import SpendingCategories from '../components/SpendingCategories';
import SavingsBudget from '../components/SavingsBudget';
import SpendingBudgets from '../components/SpendingBudgets';
import AvailableBudget from '../components/AvailableBudget';

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

const Budget = () => {
  const [items, setItems] = useState([]);
  const categories = {};
  
  useEffect(() => {
    // Fetch Data Here
  }, []);

  return (
    <div>
      <Banner>
        <SpendingCategories categories={{}} />
        <SavingsBudget />
        <SpendingBudgets />
        <AvailableBudget totals={{
          available: 1,
          income: 1,
          expense: 0
        }} />
      </Banner>

      <main>
        {/* TODO */}
      </main>
    </div>
  );
};

export default Budget;
