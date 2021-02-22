import { useState, useEffect, ReactChild } from 'react';
import styled from 'styled-components';
import DateBar from '../components/DateBar';
import TopBanner from '../components/TopBanner';

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

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

interface TitleProps {
  justifySelf?: string;
}

const Title = styled.h3<TitleProps>`
  justify-self: ${props => props.justifySelf || 'default'}
  margin-bottom: 1rem;
  text-align: center;
`;

const Categories = styled.div``;

const Category = styled.div``;

const Budget = () => {
  const [items, setItems] = useState([]);
  const categories = {};
  
  useEffect(() => {
    // Fetch Data Here
  }, []);

  return (
    <div>
      <Banner>
        <Section>
          <Title>Spending Categories</Title>
          <Categories>
            {Object.keys(categories).map((category, key) => (
              <Category key={key}></Category>
            ))}
          </Categories>
        </Section>
      </Banner>
    </div>
  );
};

export default Budget;
