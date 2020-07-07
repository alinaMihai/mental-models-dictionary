import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import boxes from 'assets/icons/boxes.svg';
import bulb from 'assets/icons/bulb-light.svg';
import home from 'assets/icons/home.svg';
import info from 'assets/icons/info-circle-line.svg';

const icons = [home, boxes, bulb, info];

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
  background-color: ${(props) => props.theme.accentLight};
  width: 100%;
  z-index: 99999;
  flex-wrap: wrap;
`;
const Item = styled.li<ItemProps>`
  .name {
    display: none;
    font-size: ${(props) => props.theme.paragraph};
  }
  a {
    text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
    color: ${(props) =>
      props.isActive ? props.theme.primaryColor : props.theme.textColor};
    text-align: center;
    display: inline-block;
    width: 100%;
    padding: 20px 25px;
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  }
  a:hover {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
  }
  img {
    width: 40px;
    height: 40px;
  }
  ${({ theme }) => theme.laptop`
    a {
      padding: 20px;
      display: flex;
      align-items: center;
    }
    .name{
      display: block;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  `}
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
  { name: 'Home', path: '/landing', icon: icons[0] },
  { name: 'Top Mental Models', path: '/top-models', icon: icons[1] },
  { name: 'More Resources', path: '/more-resources', icon: icons[2] },
  { name: 'About', path: '/about', icon: icons[3] },
];

export const SideMenu = ({ items = defaultItems }) => {
  const location = useLocation();
  return (
    <Wrapper>
      <List>
        {items.map((item, key) => (
          <ItemWrapper key={key} active={location.pathname === item.path}>
            <Link to={item.path}>
              <img src={item.icon} alt={item.name} title={item.name} />{' '}
              <span className="name">{item.name}</span>
            </Link>
          </ItemWrapper>
        ))}
      </List>
    </Wrapper>
  );
};
