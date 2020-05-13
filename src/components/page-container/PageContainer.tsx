import React from 'react';
import styled from 'styled-components';
import { Footer } from '../footer/Footer';
import { Title } from '../title/Title';
import { Subtitle } from '../subtitle/Subtitle';
import { SideMenu } from '../side-menu/SideMenu';

const Content = styled.div`
  grid-column: 1 / 6;
  padding: 10px;
  align-self: flex-start;
  ${({ theme }) => theme.tablet`
    grid-column: 2 / 6;
  `}
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1 / 5;
  align-self: flex-start;
  padding: 10px;
  text-align: center;
`;
const FooterWrapper = styled.div`
  grid-column: 1 / 6;
  align-self: flex-end;
`;
const Aside = styled.aside`
  grid-column: 1 / 5;
  padding: 10px;
  align-self: flex-start;
  ${({ theme }) => theme.tablet`
    grid-column: 1;
  `}
`;
const PageContainerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  & > * {
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.tablet`
    grid-template-rows: auto 1fr 100px;
  `}
`;
interface IpageContainer {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}
export const PageContainer = ({
  children,
  title,
  subtitle,
}: IpageContainer) => {
  return (
    <PageContainerWrapper>
      <Header>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Header>
      <Aside>
        <SideMenu />
      </Aside>
      <Content>{children}</Content>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageContainerWrapper>
  );
};
