import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Wrapper = styled.div`
  padding: 10px;
  margin: 0 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  ${({ theme }) => theme.laptop`
      width: 340px;
  `}
`;

const List = styled.ul`
  list-style: none;
  overflow-y: auto;
  margin-left: 0;
  padding-left: 0;
  ${({ theme }) => theme.laptop`
     max-height: calc(100vh / 2 - 15px);
     width: 340px;
  `}
`;

const Item = styled.li<{ active: boolean }>`
  padding: 0;
  border-bottom: ${(props) => `1px solid ${props.theme.primaryColor}`};
  margin-right: 0;
  button {
    text-align: left;
    border: none;
    line-height: 1.4;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    color: ${(props) =>
      props.active ? props.theme.primaryColor : props.theme.textColor};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    word-break: break-word;
    background-color: ${(props) =>
      props.active ? props.theme.accentLight : 'white'};
    font-size: ${(props) => props.theme.paragraph};
  }
  button:hover {
    color: ${(props) => props.theme.primaryColor};
    font-weight: bold;
    background-color: ${(props) => lighten(0.2, props.theme.accentLight)};
  }
`;
export interface MentalModel {
  Category: number;
  Model: string;
  Description: string;
  Source: string;
}

type Props = {
  items: MentalModel[];
  cursor: number;
  onClick(item: MentalModel, index: number): void;
  handleMouseOver(value: boolean): void;
};

export const ModelsList = ({
  items,
  cursor,
  onClick,
  handleMouseOver,
}: Props) => {
  return (
    <Wrapper>
      <h3>Mental Models</h3>
      <List
        onMouseOver={() => handleMouseOver(true)}
        onFocus={() => handleMouseOver(true)}
        onMouseOut={() => handleMouseOver(false)}
        onBlur={() => handleMouseOver(false)}
      >
        {items.map((item, index) => (
          <Item id={`${index}`} key={index} active={index === cursor}>
            {' '}
            <button onClick={() => onClick(item, index)}>
              {item.Model} {index === cursor && <span>&gt;</span>}
            </button>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
