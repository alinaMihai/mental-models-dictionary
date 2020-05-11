import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul``;
const Item = styled.li``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const defaultItems = [
  { name: 'Top Mental Models', path: '/top-models' },
  { name: 'More Resources', path: '/more-resources' },
  { name: 'About', path: '/about' },
];

export const SideMenu = ({ items = defaultItems }) => {
  return (
    <Wrapper>
      <List>
        {items.map((item, key) => (
          <Item key={key}>
            <Link to={item.path}>{item.name}</Link>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
