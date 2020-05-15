import React from 'react';
import styled from 'styled-components';
import { Book, BookItem } from '../book/Book';

const Wrapper = styled.div``;

type LibraryProps = {
  items: BookItem[];
};

export const Library = ({ items = [] }: LibraryProps) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};
