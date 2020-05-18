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
  width: 100%;
  height: 100%;
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
  grid-row: 2;
  align-self: flex-start;
  padding: 30px;
  ${({ theme }) => theme.tablet`
    position: fixed;
    top: 200px;
    grid-column: 1;
    padding: 10px;
  `}
`;
const PageContainerWrapper = styled.div`
  height: 100vh;
  display: grid;
  & > * {
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.tablet`
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 200px 1fr;
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
      <Aside>
        <SideMenu />
      </Aside>
      <Header>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Header>
      <Content>{children}</Content>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageContainerWrapper>
  );
};
