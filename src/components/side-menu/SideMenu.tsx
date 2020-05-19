import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

interface ItemProps {
  readonly isActive: boolean;
}

const List = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;
const Item = styled.li<ItemProps>`
  a {
    color: ${(props) =>
      props.isActive ? props.theme.textColorOnPrimary : props.theme.textColor};
    text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
    color: ${(props) => props.isActive && props.theme.primaryColor};
    text-align: center;
    display: inline-block;
    width: 100%;
    padding: 20px;
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  }
  a:hover {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
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
