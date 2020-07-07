import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Book, BookItem } from '../book/Book';
import { BookShelf } from '../book-shelf/BookShelf';
import { useWindowSize, sizes } from 'helpers';

const Wrapper = styled.div`
  width: 100%;
  .rowContainer {
    margin: 0 auto;
    max-width: 1100px;
  }
`;

const Row = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  padding-left: 0;
  justify-content: center;
  > li {
    flex: 1;
  }
  &:last-child {
    align-self: flex-start;
  }
`;

type LibraryProps = {
  items: BookItem[];
};

const hashTableRows = {};

function getRowsPerItem(screenSize) {
  if (screenSize.width < sizes.tablet) {
    return 2;
  }
  if (screenSize.width >= sizes.tablet && screenSize.width < sizes.laptop) {
    return 4;
  } else {
    return 6;
  }
}

export const Library = ({ items = [] }: LibraryProps) => {
  const screenSize = useWindowSize();
  const [rows, setRows] = useState([]);
  const getRows = (itemsPerRow = 6) => {
    let i = 0;
    const rows = [];
    while (i < items.length) {
      const row = [items[i]];
      i++;
      while (i % itemsPerRow !== 0 && i < items.length) {
        row.push(items[i]);
        i++;
      }
      rows.push(row);
    }
    return rows.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="rowContainer">
          <Row key={rowIndex}>
            {row.map((item) => (
              <Book key={item.id} item={item} />
            ))}
          </Row>
          <BookShelf />
        </div>
      );
    });
  };

  useEffect(() => {
    if (items.length > 0) {
      const rowsPerItem = getRowsPerItem(screenSize);
      if (!hashTableRows[rowsPerItem]) {
        const newRows = getRows(rowsPerItem);
        setRows(newRows);
        hashTableRows[rowsPerItem] = newRows;
      } else {
        setRows(hashTableRows[rowsPerItem]);
      }
    }
  }, [screenSize, items]);

  return <Wrapper>{rows}</Wrapper>;
};
