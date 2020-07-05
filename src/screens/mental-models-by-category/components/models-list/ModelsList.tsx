import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  margin-right: 10px;
  flex: 1;
  ${({ theme }) => theme.laptop`
      width: 300px;
  `}
`;

const List = styled.ul`
  list-style: none;
  overflow-y: auto;
  margin-left: 0;
  padding-left: 0;
  ${({ theme }) => theme.laptop`
     max-height:  calc(100vh - -26px);
     width: 300px;
  `}
`;

const Item = styled.li<{ active: boolean }>`
  padding: 10px 0;
  border-bottom: ${(props) => `1px dashed ${props.theme.primaryColor}`};
  margin-right: 16px;
  button {
    background-color: white;
    text-align: left;
    border: none;
    line-height: 1.4;
    cursor: pointer;
    color: ${(props) =>
      props.active ? props.theme.primaryColor : props.theme.textColor};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    word-break: break-word;
  }
  button:hover {
    color: ${(props) => props.theme.primaryColor};
    font-weight: bold;
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
      <h3>Mental Model</h3>
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
