import React from 'react';
import styled from 'styled-components';
import { Footer } from '../footer/Footer';
import { Title } from '../title/Title';
import { Subtitle } from '../subtitle/Subtitle';
import { SideMenu } from '../side-menu/SideMenu';

const Content = styled.div`
  padding: 10px;
  width: 100%;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  min-width: 355px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  ${({ theme }) => theme.laptop`
    padding: 0;
  `}
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
  width: calc(100vw - 30px);
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 20px;
  ${({ theme }) => theme.laptop`
    margin-top: 70px;
  `}
`;
const FooterWrapper = styled.div`
  width: 100%;
`;
const TopMenu = styled.div`
  padding: 30px;
  ${({ theme }) => theme.laptop`
    padding: 0;
  `}
`;
const PageContainerWrapper = styled.div`
  display: block;
  height: 100%;
  & > * {
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.laptopL`
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
    <>
      <TopMenu>
        <SideMenu />
      </TopMenu>
      <PageContainerWrapper>
        <Header>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
        <Content>{children}</Content>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </PageContainerWrapper>
    </>
  );
};
