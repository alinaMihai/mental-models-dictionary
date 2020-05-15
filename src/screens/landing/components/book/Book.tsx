import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export interface BookItem {
  name: string;
  id: number;
}

type BookProps = {
  item: BookItem;
};
export const Book: React.FC<BookProps> = ({ item: { name, id } }) => {
  return <Wrapper>{name}</Wrapper>;
};
