import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
export interface MentalModel {
  Category: number;
  Model: string;
  Description: string;
  Source: string;
}

type Props = {
  items: MentalModel[];
  currentSelection: string;
  onClick(item: MentalModel): void;
};

export const ModelsList = ({ items, currentSelection, onClick }: Props) => {
  const handleClick = (item) => {
    onClick(item);
  };
  return (
    <Wrapper>
      List of mental models
      {items.map((item, index) => (
        <div
          role="button"
          tabIndex={index}
          key={index}
          className={`${currentSelection === item.Model && 'selected'}`}
          onKeyPress={() => handleClick(item)}
          onClick={() => handleClick(item)}
        >
          {item.Model}
        </div>
      ))}
    </Wrapper>
  );
};
