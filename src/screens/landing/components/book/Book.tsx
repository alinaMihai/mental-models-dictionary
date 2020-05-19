import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Illustrations } from 'assets';

const Wrapper = styled.li`
  width: auto;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10px;
  padding: 10px;
  margin-top: 10px;
  height: 200px;
  max-width: 150px;
  word-break: break-all;
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
    top: 203px;
    filter: blur(3px);
    z-index: -5;
  }
  img {
    border-style: none;
    position: absolute;
    height: 200px;
    width: 151px;
    z-index: -1;
    top: 0;
    left: 0;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    text-align: center;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 33px;

    p {
      padding: 20px 0;
      word-break: break-word;
    }
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
      <img src={Illustrations.cover} alt="book-cover" aria-hidden="true" />
      <Link to={`/mental-model/${id}`}>
        <p>{name}</p>
      </Link>
    </Wrapper>
  );
};
