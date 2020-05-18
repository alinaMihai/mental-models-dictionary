import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.li`
  width: auto;
  height: 100px;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10px;
  padding: 10px;
  margin-top: 10px;
  height: 158px;
  max-width: 150px;
  word-break: break-all;
  border: 1px solid gray;
  cursor: pointer;
  :hover {
    box-shadow: ${(props) => `6px 6px 5px ${props.theme.textColor}`};
  }
  ::before {
    content: '';
    display: block;
    height: 0.8em;
    width: 84%;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 59%;
    position: absolute;
    top: 157px;
    filter: blur(3px);
    z-index: -5;
  }
`;

export interface BookItem {
  name: string;
  id: number;
}

type BookProps = {
  item: BookItem;
};
export const Book: React.FC<BookProps> = ({ item: { name, id } }) => {
  return (
    <Wrapper>
      <Link to={`/mental-model/${id}`}>{name}</Link>
    </Wrapper>
  );
};
