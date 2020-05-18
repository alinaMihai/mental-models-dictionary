import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

interface ItemProps {
  readonly isActive: boolean;
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 10px;
`;
const Item = styled.li<ItemProps>`
  a {
    color: ${({ theme }) => theme.textColorOnPrimary};
    text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
    background-color: ${(props) =>
      props.isActive && props.theme.primaryHoverColor};
    text-align: center;
    display: inline-block;
    width: 100%;
    padding: 20px;
  }
  a:hover {
    border-top: ${(props) => `1px solid ${props.theme.textColorOnPrimary}`};
    border-bottom: ${(props) => `1px solid ${props.theme.textColorOnPrimary}`};
    background-color: ${(props) => props.theme.primaryHoverColor};
  }
  a:first-child,
  a:last-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  a:hover:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ItemWrapper = ({ active, children }) => (
  <Item isActive={active}>{children}</Item>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const defaultItems = [
  { name: 'Home', path: '/landing' },
  { name: 'Top Mental Models', path: '/top-models' },
  { name: 'More Resources', path: '/more-resources' },
  { name: 'About', path: '/about' },
];

export const SideMenu = ({ items = defaultItems }) => {
  const location = useLocation();
  return (
    <Wrapper>
      <List>
        {items.map((item, key) => (
          <ItemWrapper key={key} active={location.pathname === item.path}>
            <Link to={item.path}>{item.name}</Link>
          </ItemWrapper>
        ))}
      </List>
    </Wrapper>
  );
};
