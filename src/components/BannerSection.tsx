import { ReactNode } from 'react';
import styled from 'styled-components';

type SectionProps = {
  justifyContent?: string;
};

const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'default'}
`;

type BannerSectionProps = {
  justifyContent?: string;
  children?: ReactNode;
};

const BannerSection = ({ justifyContent, children }: BannerSectionProps) => {
  return <Section justifyContent={justifyContent}>{children}</Section>
};

export default BannerSection;
