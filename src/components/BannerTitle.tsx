import { ReactChild } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

type BannerTitleProps = {
  children?: ReactChild;
};

const BannerTitle = ({ children }: BannerTitleProps) => {
  return <Title>{children}</Title>;
};

export default BannerTitle;
