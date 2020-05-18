import React from 'react';
import styled from 'styled-components';
import { Book, BookItem } from '../book/Book';
import { BookShelf } from '../book-shelf/BookShelf';

const Row = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  > li {
    flex: 1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

type LibraryProps = {
  items: BookItem[];
};

export const Library = ({ items = [] }: LibraryProps) => {
  const getRows = () => {
    let i = 0;
    const rows = [];
    while (i < items.length) {
      const row = [items[i]];
      i++;
      while (i % 6 !== 0 && i < items.length) {
        row.push(items[i]);
        i++;
      }
      rows.push(row);
    }
    return rows.map((row, rowIndex) => {
      return (
        <>
          <Row key={rowIndex}>
            {row.map((item) => (
              <Book key={item.id} item={item} />
            ))}
          </Row>
          <BookShelf />
        </>
      );
    });
  };

  return <Wrapper>{getRows()}</Wrapper>;
};
