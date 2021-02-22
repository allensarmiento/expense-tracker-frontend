import styled from 'styled-components';
import BannerTitle from './BannerTitle';
import BannerSection from './BannerSection';

const Categories = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: .4rem;
  overflow-y: auto;

  & > *:nth-child(odd) {
    background: var(--table-odd-bg-color);
  }
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: minmax(20rem, max-content) minmax(10rem, 1fr);
  padding: .5rem 1rem;
`;

const CategoryName = styled.span`
  text-overflow: ellipses;
  overflow: hidden;
`;

const CategoryAmount = styled.span`
  text-overflow: ellipses;
  overflow: hidden;
`;

type CategoryMap = {
  [key: string]: number;
};

type SpendingCategoriesProps = {
  categories: CategoryMap;
};

const SpendingCategories = ({ categories }: SpendingCategoriesProps) => {
  return (
    <BannerSection>
      <BannerTitle>Spending Categories</BannerTitle>
      <Categories>
        {Object.keys(categories).map((category, key) => (
          <Category key={key}>
            <CategoryName>{category}</CategoryName>
            <CategoryAmount>${categories[category]}</CategoryAmount>
          </Category>
        ))}
      </Categories>
    </BannerSection>
  );
};

export default SpendingCategories;
